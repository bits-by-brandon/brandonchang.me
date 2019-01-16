import * as PQueue from 'p-queue';
import {delay} from "../utility/utils";
const consoleQueue = new PQueue({
    concurrency: 1,
});

export const CONSOLE_INPUT = 'CONSOLE_INPUT';
export const CONSOLE_UP = 'CONSOLE_UP';
export const CONSOLE_DOWN = 'CONSOLE_DOWN';
export const CONSOLE_DELETE = 'CONSOLE_DELETE';
export const CONSOLE_SUBMIT = 'CONSOLE_SUBMIT';
export const CONSOLE_CLEAR = 'CONSOLE_CLEAR';
export const CONSOLE_CLOSE = 'CONSOLE_CLOSE';
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

export function toggleHideCursor() {
    return {type: TOGGLE_HIDE_CURSOR}
}

export function inputClear() {
    return {type: INPUT_CLEAR}
}

// Thunk actions

/**
 * @param {string} input - string to enter into the console
 * @returns {Function}
 */
export function consoleRunCommand(input) {
    return dispatch => {
        // Clear out any queued typing
        consoleQueue.clear();

        // Clear any user input
        dispatch(inputClear());

        // Split the command's name into an array
        const inputLetters = input.split('');

        // Create a Promise for each letter
        const inputActions = inputLetters.map(letter => () =>
            delay(60).then(() => dispatch(consoleInput(letter))));

        // Add the letters to queue for typing
        consoleQueue.addAll(inputActions);

        // Wait a second before adding the input command
        consoleQueue.add(() => delay(200));

        // Submit the input command
        consoleQueue.add(() => dispatch(consoleSubmit()));
    }
}