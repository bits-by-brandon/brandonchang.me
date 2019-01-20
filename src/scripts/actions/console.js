import * as PQueue from 'p-queue';
import {delay} from "../utility/utils";
import {matchCommand} from "../programs";
import {commandTypes} from "../models/Command";

const inputQueue = new PQueue({
    concurrency: 1,
});

const outputQueue = new PQueue({
    concurrency: 1,
});

export const CONSOLE_INPUT = 'CONSOLE_INPUT';
export const CONSOLE_UP = 'CONSOLE_UP';
export const CONSOLE_DOWN = 'CONSOLE_DOWN';
export const CONSOLE_DELETE = 'CONSOLE_DELETE';
export const CONSOLE_SUBMIT = 'CONSOLE_SUBMIT';
export const CONSOLE_CLEAR = 'CONSOLE_CLEAR';
export const CONSOLE_CLOSE = 'CONSOLE_CLOSE';
export const CONSOLE_OUTPUT = 'CONSOLE_OUTPUT';
export const CONSOLE_SET_PROMPT = 'CONSOLE_SET_PROMPT';
export const CONSOLE_ADD_HISTORY = 'CONSOLE_ADD_HISTORY';
export const INPUT_CLEAR = 'INPUT_CLEAR';
export const TOGGLE_HIDE_CURSOR = 'TOGGLE_HIDE_CURSOR';

export function consoleInput(key) {
    return {type: CONSOLE_INPUT, payload: key}
}

export function consoleUp() {
    return {type: CONSOLE_UP}
}

export function consoleDown() {
    return {type: CONSOLE_DOWN}
}

export function consoleDelete() {
    return {type: CONSOLE_DELETE}
}

export function consoleSubmit() {
    return {type: CONSOLE_SUBMIT}
}

export function consoleClear() {
    return {type: CONSOLE_CLEAR}
}

export function consoleClose() {
    return {type: CONSOLE_CLOSE}
}

export function consoleOutput(message) {
    return {type: CONSOLE_OUTPUT, payload: message}
}

export function consoleSetPrompt(prompt) {
    return {type: CONSOLE_SET_PROMPT, payload: prompt}
}

export function toggleHideCursor() {
    return {type: TOGGLE_HIDE_CURSOR}
}

export function inputClear() {
    return {type: INPUT_CLEAR}
}

// Thunk actions
export function consoleRunCommand(input) {
    return dispatch => {
        // Clear out any queued typing
        inputQueue.clear();

        // Find the appropriate command
        const command = matchCommand(input);

        // Check if command is a stream
        if (!command || command.commandType !== commandTypes.STREAM_CONSOLE) {
            dispatch(consoleSubmit());
            return;
        }

        // TODO: Extract console add history
        dispatch(inputClear());
        dispatch(consoleOutput({type: ['input'], output: input}));
        return command.run(input, dispatch);
    }
}

/**
 * @param {string} input - string to enter into the console
 * @returns {Function}
 */
export function consoleInputCommand(input) {
    return dispatch => {
        // Clear out any queued typing
        inputQueue.clear();

        // Clear any user input
        dispatch(inputClear());

        // Split the command's name into an array
        const inputLetters = input.split('');

        // Create a Promise for each letter
        const inputActions = inputLetters.map(letter => () =>
            delay(60).then(() => dispatch(consoleInput(letter))));

        // Add the letters to queue for typing
        inputQueue.addAll(inputActions);

        // Wait a second before adding the input command
        inputQueue.add(() => delay(200));

        // Submit the input command
        inputQueue.add(() => dispatch(consoleSubmit()));
    }
}
