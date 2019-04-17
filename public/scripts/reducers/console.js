"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleOutput_1 = require("../models/ConsoleOutput");
const types_1 = require("../store/console/types");
const defaultState = {
    inputHistory: [],
    inputHistoryIndex: 0,
    userInput: '',
    cursorVisible: false,
    cursorInterval: null,
    blinkRate: 1000,
    prompt: '>',
    console: [],
    consoleVisible: false,
    consoleState: 'pre-boot',
    initialText: '',
    hideCursor: false,
    tabSpace: 10,
    bootText: 'brandonchang.me Interactive Program Prompt (ICP)\nPress ENTER to boot',
};
function console(state = defaultState, action) {
    switch (action.type) {
        case types_1.ConsoleActionType.CONSOLE_UP: {
            const nextIndex = Math.min(state.inputHistoryIndex + 1, state.inputHistory.length);
            return Object.assign({}, state, { inputHistoryIndex: nextIndex, userInput: state.inputHistory[state.inputHistory.length - nextIndex] });
        }
        case types_1.ConsoleActionType.CONSOLE_DOWN: {
            if (state.inputHistoryIndex === 0) {
                return;
            }
            const nextIndex = Math.max(state.inputHistoryIndex - 1, 1);
            return Object.assign({}, state, { inputHistoryIndex: nextIndex, userInput: state.inputHistory[state.inputHistory.length - nextIndex] });
        }
        case types_1.ConsoleActionType.CONSOLE_DELETE:
            return Object.assign({}, state, { userInput: state.userInput.substring(0, state.userInput.length - 1) });
        case types_1.ConsoleActionType.CONSOLE_INPUT:
            return Object.assign({}, state, { userInput: state.userInput + action.payload, hideCursor: false });
        case types_1.ConsoleActionType.CONSOLE_SUBMIT:
            // Return last state if there is no user input
            if (state.userInput.length === 0) {
                return state;
            }
            return Object.assign({}, state, { userInput: '', console: state.console.concat({ style: [ConsoleOutput_1.OutputType.INPUT], output: state.userInput }), consoleVisible: true });
        case types_1.ConsoleActionType.CONSOLE_PRINT_LETTER:
            let newConsole = [...state.console];
            let newMessage = newConsole.pop();
            newMessage.output = newMessage.output + action.payload.letter;
            newConsole.concat(newMessage);
            return Object.assign({}, state, { console: newConsole });
        case types_1.ConsoleActionType.CONSOLE_SET_PROMPT:
            return Object.assign({}, state, { prompt: action.payload });
        case types_1.ConsoleActionType.CONSOLE_SET_INITIAL_TEXT:
            return Object.assign({}, state, { initialText: action.payload });
        case types_1.ConsoleActionType.CONSOLE_SET_STATE:
            return Object.assign({}, state, { consoleState: action.payload });
        case types_1.ConsoleActionType.CONSOLE_OUTPUT:
            return Object.assign({}, state, { console: state.console.concat(action.payload) });
        case types_1.ConsoleActionType.CONSOLE_NEWLINE:
            return Object.assign({}, state, { console: state.console.concat({ style: [ConsoleOutput_1.OutputType.STANDARD], output: ' ' }) });
        case types_1.ConsoleActionType.CONSOLE_SET_SCREEN:
            return Object.assign({}, state, { console: action.payload });
        case types_1.ConsoleActionType.CONSOLE_CLEAR:
            return Object.assign({}, state, { userInput: '', console: [] });
        case types_1.ConsoleActionType.CONSOLE_CLOSE:
            return Object.assign({}, state, { consoleVisible: false });
        case types_1.ConsoleActionType.INPUT_CLEAR:
            return Object.assign({}, state, { userInput: '' });
        case types_1.ConsoleActionType.TOGGLE_HIDE_CURSOR:
            return Object.assign({}, state, { cursorVisible: !state.cursorVisible });
        default:
            return state;
    }
}
exports.default = console;
;
//# sourceMappingURL=console.js.map