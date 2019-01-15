import {commandTypes} from '../models/Command';
import * as commands from '../utility/commands';

const commandArray = Object.keys(commands).map(commandName => commands[commandName]);

export default function applyConsoleCommand(state) {

    const input = state.userInput;

    // Match the user input command to an appropriate command
    const command = commandArray.find(command => {
        return command.inputs.includes(input)
    });

    if (!command || typeof command !== "object") {
        return error(state, input);
    }

    switch (command.commandType) {

        case commandTypes.CLEAR_CONSOLE:
            return {...state, userInput: '', console: []};

        case commandTypes.HELP:
            return showHelp(state, input);

        case commandTypes.EXIT_CONSOLE: {
            return {
                ...state,
                inputHistoryIndex: 0,
                userInput: '',
                inputHistory: state.inputHistory.concat(input),
                consoleVisible: false,
                console: []
            };
        }

        case commandTypes.PRINT_OUTPUT:
        default:
            // Collect output from the command
            const output = command.run(input);

            return {
                ...state,
                inputHistoryIndex: 0,
                userInput: '',
                inputHistory: state.inputHistory.concat(input),
                consoleVisible: true,
                console: [
                    ...state.console,
                    {type: ['input'], payload: input}
                ].concat(output)
            };
    }
}

/**
 *  Lists out all commands with the "helpText" property assigned
 */
function showHelp(state, input) {
    return {
        ...state,
        inputHistoryIndex: 0,
        inputHistory: state.inputHistory.concat(input),
        userInput: '',
        consoleVisible: true,
        console: [
            ...state.console,
            {type: ['input'], payload: input},
            {type: ['response'], payload: '==== listing out available commands ===='},
            ...commandArray
                .filter(command => command.helpText)
                .map(command => {
                    let tabString = '';
                    for (let i = 0; i < (state.tabSpace - command.commandName.length); i++) {
                        tabString += "\u00A0";
                    }
                    return {
                        type: ['response'],
                        payload: command.commandName + tabString + command.helpText
                    }
                })
        ]
    }
}

/**
 * @param state
 * @param input
 * @returns {object} newState
 */
function error(state, input) {
    return {
        ...state,
        inputHistoryIndex: 0,
        inputHistory: state.inputHistory.concat(input),
        userInput: '',
        consoleVisible: true,
        console: [
            ...state.console,
            {type: ['input'], payload: input},
            {type: ['error'], payload: 'command not found: ' + input},
            {type: ['error'], payload: "type 'help' for list of available commands"}
        ]
    }
}
