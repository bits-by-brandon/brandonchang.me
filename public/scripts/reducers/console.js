"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../actions/console");
const commands_1 = require("./commands");
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
    tabSpace: 8,
    initialText: '',
    bootText: 'brandonchang.me Interactive Program Prompt (ICP)\nPress ENTER to boot',
};
function console(state = defaultState, action) {
    switch (action.type) {
        case console_1.CONSOLE_UP: {
            const nextIndex = Math.min(state.inputHistoryIndex + 1, state.inputHistory.length);
            return Object.assign({}, state, { inputHistoryIndex: nextIndex, userInput: state.inputHistory[state.inputHistory.length - nextIndex] });
        }
        case console_1.CONSOLE_DOWN: {
            if (state.inputHistoryIndex === 0) {
                return;
            }
            const nextIndex = Math.max(state.inputHistoryIndex - 1, 1);
            return Object.assign({}, state, { inputHistoryIndex: nextIndex, userInput: state.inputHistory[state.inputHistory.length - nextIndex] });
        }
        case console_1.CONSOLE_DELETE:
            return Object.assign({}, state, { userInput: state.userInput.substring(0, state.userInput.length - 1) });
        case console_1.CONSOLE_INPUT:
            return Object.assign({}, state, { userInput: state.userInput + action.payload, hideCursor: false });
        case console_1.CONSOLE_SUBMIT:
            // Return last state if there is no user input
            if (state.userInput.length === 0) {
                return state;
            }
            return commands_1.default(state);
        case console_1.CONSOLE_PRINT_LETTER:
            let newConsole = [...state.console];
            let newMessage = newConsole.pop();
            newMessage.output = newMessage.output + action.payload.letter;
            newConsole.concat(newMessage);
            console.log(action.payload.letter);
            return Object.assign({}, state, { console: newConsole });
        case console_1.CONSOLE_SET_PROMPT:
            return Object.assign({}, state, { prompt: action.payload });
        case console_1.CONSOLE_SET_INITIAL_TEXT:
            return Object.assign({}, state, { initialText: action.payload });
        case console_1.CONSOLE_SET_STATE:
            return Object.assign({}, state, { consoleState: action.payload });
        case console_1.CONSOLE_OUTPUT:
            return Object.assign({}, state, { console: state.console.concat(action.payload) });
        case console_1.CONSOLE_SET_SCREEN:
            return Object.assign({}, state, { console: action.payload });
        case console_1.CONSOLE_CLEAR:
            return Object.assign({}, state, { userInput: '', console: [] });
        case console_1.CONSOLE_CLOSE:
            return Object.assign({}, state, { consoleVisible: false });
        case console_1.INPUT_CLEAR:
            return Object.assign({}, state, { userInput: '' });
        case console_1.TOGGLE_HIDE_CURSOR:
            return Object.assign({}, state, { cursorVisible: !state.cursorVisible });
        default:
            return state;
    }
}
exports.default = console;
;
//# sourceMappingURL=console.js.map