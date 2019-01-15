export const CONSOLE_INPUT = 'CONSOLE_INPUT';
export const CONSOLE_UP = 'CONSOLE_UP';
export const CONSOLE_DOWN = 'CONSOLE_DOWN';
export const CONSOLE_DELETE = 'CONSOLE_DELETE';
export const CONSOLE_SUBMIT = 'CONSOLE_SUBMIT';
export const CONSOLE_CLEAR = 'CONSOLE_CLEAR';
export const CONSOLE_CLOSE = 'CONSOLE_CLOSE';
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
