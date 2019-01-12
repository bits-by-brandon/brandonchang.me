import * as commands from './commands';
import {actionTypes} from '../models/Command';

const commandArray = Object.keys(commands).map(commandName => commands[commandName]);
const tabSpace = 8;

export function handleSubmit(currentState) {
    const input = currentState.userInput;

    // Match the user input command to an appropriate command
    const currentCommand = commandArray.find(command => {
        return command.inputs.includes(input)
    });

    if (currentCommand && typeof currentCommand === "object") {
        switch (currentCommand.actionType) {
            case actionTypes.PRINT_OUTPUT:
                return printOutput(currentState, currentCommand, input);
            case actionTypes.CLEAR_CONSOLE:
                return clearConsole(currentState, input);
            case actionTypes.EXIT_CONSOLE:
                return exitConsole(currentState, input);
            case actionTypes.HELP:
                return showHelp(currentState, currentCommand, input);
            default:
                return error(currentState, input);
        }
    } else {
        return error(currentState, input);
    }
}

export function printOutput(currentState, command, input) {
    const responseObjects = command.responses.map(response => ({type: ['response'], payload: response}));

    return {
        inputHistoryIndex: 0,
        inputHistory: currentState.inputHistory.concat(input),
        userInput: '',
        console: [
            ...currentState.console,
            {type: ['input'], payload: '> ' + currentState.userInput}
        ].concat(responseObjects)
    }
}

export function clearConsole(currentState, input) {
    return {
        inputHistoryIndex: 0,
        inputHistory: currentState.inputHistory.concat(input),
        userInput: '',
        console: [{type: 'input', payload: ''}]
    }
}


export function exitConsole(currentState, input) {
    return {
        inputHistoryIndex: 0,
        inputHistory: currentState.inputHistory.concat(input),
        userInput: '',
        console: [],
    }
}

/**
 *  Lists out all commands with the "helpText" property assigned
 */
export function showHelp(currentState, command, input) {
    return {
        inputHistoryIndex: 0,
        inputHistory: currentState.inputHistory.concat(input),
        userInput: '',
        console: [
            ...currentState.console,
            {type: ['input'], payload: '> ' + currentState.userInput},
            {type: ['response'], payload: '==== listing out available commands ===='},
            ...commandArray
                .filter(command => command.helpText)
                .map(command => {
                    let tabString = '';
                    for (let i = 0; i < (tabSpace - command.commandName.length); i++) {
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
 * Returns error string with name of command entered
 *
 * @param {object} currentState
 * @param {string} input
 * @returns {object} newState
 */
function error(currentState, input) {
    return {
        inputHistoryIndex: 0,
        inputHistory: currentState.inputHistory.concat(input),
        userInput: '',
        console: [
            ...currentState.console,
            {type: ['input'], payload: '> ' + currentState.userInput},
            {type: ['error'], payload: "command not found: " + input},
            {type: ['error'], payload: "type 'help' for list of available commands"}
        ]
    }
}
