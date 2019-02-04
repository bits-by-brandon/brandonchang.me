import {commandTypes} from '../models/Command';
import {matchCommand, getCommands} from '../programs';

const commandArray = getCommands();

export default function applyConsoleCommand(state) {
    const input = state.userInput;
    const command = matchCommand(input);

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
            const output = command.printOutput();

            return {
                ...state,
                inputHistoryIndex: 0,
                userInput: '',
                inputHistory: state.inputHistory.concat(input),
                consoleVisible: true,
                console: [
                    ...state.console,
                    {style: ['input'], output: input}
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
            {style: ['input'], output: input},
            {style: ['response'], output: 'AVAILABLE COMMANDS'},
            {style: ['response'], output: '========================================'},
            ...commandArray
                .filter(command => command.helpText)
                .map(command => {
                    let tabString = '';
                    for (let i = 0; i < (state.tabSpace - command.commandName.length); i++) {
                        tabString += "\u00A0";
                    }
                    return {
                        style: ['response'],
                        output: command.commandName + tabString + command.helpText
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
            {style: ['input'], output: input},
            {style: ['error'], output: 'command not found: ' + input},
            {style: ['error'], output: "type 'help' for list of available commands"}
        ]
    }
}
