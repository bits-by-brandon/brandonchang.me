"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PQueue = require("p-queue");
const utils_1 = require("../utility/utils");
const ProgramManager_1 = require("../programs/ProgramManager");
const Program_1 = require("../models/Program");
const queueLines_1 = require("../utility/queueLines");
const react_ga_1 = require("react-ga");
const inputQueue = new PQueue({
    concurrency: 1,
});
exports.CONSOLE_INPUT = 'CONSOLE_INPUT';
exports.CONSOLE_UP = 'CONSOLE_UP';
exports.CONSOLE_DOWN = 'CONSOLE_DOWN';
exports.CONSOLE_DELETE = 'CONSOLE_DELETE';
exports.CONSOLE_SUBMIT = 'CONSOLE_SUBMIT';
exports.CONSOLE_CLEAR = 'CONSOLE_CLEAR';
exports.CONSOLE_CLOSE = 'CONSOLE_CLOSE';
exports.CONSOLE_OUTPUT = 'CONSOLE_OUTPUT';
exports.CONSOLE_PRINT_LETTER = 'CONSOLE_PRINT_LETTER';
exports.CONSOLE_NEWLINE = 'CONSOLE_NEWLINE';
exports.CONSOLE_SET_SCREEN = 'CONSOLE_SET_SCREEN';
exports.CONSOLE_SET_PROMPT = 'CONSOLE_SET_PROMPT';
exports.CONSOLE_SET_INITIAL_TEXT = 'CONSOLE_SET_INITIAL_TEXT';
exports.CONSOLE_SET_STATE = 'CONSOLE_SET_STATE';
exports.CONSOLE_ADD_HISTORY = 'CONSOLE_ADD_HISTORY';
exports.INPUT_CLEAR = 'INPUT_CLEAR';
exports.TOGGLE_HIDE_CURSOR = 'TOGGLE_HIDE_CURSOR';
function consoleInput(key) {
    return { type: exports.CONSOLE_INPUT, payload: key };
}
exports.consoleInput = consoleInput;
function consoleUp() {
    return { type: exports.CONSOLE_UP };
}
exports.consoleUp = consoleUp;
function consoleDown() {
    return { type: exports.CONSOLE_DOWN };
}
exports.consoleDown = consoleDown;
function consoleDelete() {
    return { type: exports.CONSOLE_DELETE };
}
exports.consoleDelete = consoleDelete;
function consoleSubmit() {
    return { type: exports.CONSOLE_SUBMIT };
}
exports.consoleSubmit = consoleSubmit;
function consoleClear() {
    return { type: exports.CONSOLE_CLEAR };
}
exports.consoleClear = consoleClear;
function consoleClose() {
    return { type: exports.CONSOLE_CLOSE };
}
exports.consoleClose = consoleClose;
function consoleOutput(message) {
    return { type: exports.CONSOLE_OUTPUT, payload: message };
}
exports.consoleOutput = consoleOutput;
function consolePrintLetter(letter, style = ['input']) {
    return { type: exports.CONSOLE_PRINT_LETTER, payload: { letter, style } };
}
exports.consolePrintLetter = consolePrintLetter;
function consoleNewLine() {
    return { type: exports.CONSOLE_NEWLINE };
}
exports.consoleNewLine = consoleNewLine;
function consoleSetScreen(console) {
    return { type: exports.CONSOLE_SET_SCREEN, payload: console };
}
exports.consoleSetScreen = consoleSetScreen;
function consoleSetPrompt(prompt) {
    return { type: exports.CONSOLE_SET_PROMPT, payload: prompt };
}
exports.consoleSetPrompt = consoleSetPrompt;
function consoleSetInitialText(initialText) {
    return { type: exports.CONSOLE_SET_INITIAL_TEXT, payload: initialText };
}
exports.consoleSetInitialText = consoleSetInitialText;
function consoleSetState(state) {
    return { type: exports.CONSOLE_SET_STATE, payload: state };
}
exports.consoleSetState = consoleSetState;
function toggleHideCursor() {
    return { type: exports.TOGGLE_HIDE_CURSOR };
}
exports.toggleHideCursor = toggleHideCursor;
function inputClear() {
    return { type: exports.INPUT_CLEAR };
}
exports.inputClear = inputClear;
// Thunk actions
function consoleRunCommand(input) {
    return dispatch => {
        // Clear out any queued typing
        inputQueue.clear();
        // Find the appropriate command
        const command = ProgramManager_1.default.findProgram(input);
        // Check if command is a stream
        if (!command || command.commandType !== Program_1.commandTypes.STREAM_CONSOLE) {
            // Register event with Google Analytics
            react_ga_1.default.event({ category: 'Program', action: 'Keyboard Submit', label: input });
            dispatch(consoleSubmit());
            return;
        }
        // TODO: Extract console add history
        dispatch(inputClear());
        dispatch(consoleOutput({ style: ['input'], output: input }));
        return command.run(input, dispatch);
    };
}
exports.consoleRunCommand = consoleRunCommand;
/**
 * @param {string} input - string to enter into the console
 * @returns {Function}
 */
function consoleInputCommand(input) {
    return dispatch => {
        // Clear any user input
        dispatch(inputClear());
        // Add letters to the queue for typing
        queueLines_1.queueLine(input, inputQueue, letter => {
            dispatch(consoleInput(letter));
        }, 60);
        // Wait a second before adding the input command
        inputQueue.add(() => utils_1.delay(200));
        // Register event with Google Analytics
        react_ga_1.default.event({ category: 'Program', action: 'Click Submit', label: input });
        // Submit the input command
        inputQueue.add(() => dispatch(consoleSubmit()));
    };
}
exports.consoleInputCommand = consoleInputCommand;
/**
 * @returns {Function}
 * @param lines
 */
function consoleOutputMultiple(lines) {
    return dispatch => {
        // Clear any user input
        dispatch(inputClear());
        // Add lines to the queue for typing
        queueLines_1.queueLines(lines, inputQueue, line => {
            dispatch(consoleOutput(line));
        }, 200);
        // Wait a second before adding the input command
        inputQueue.add(() => utils_1.delay(200));
        // Submit the input command
        inputQueue.add(() => dispatch(consoleSubmit()));
    };
}
exports.consoleOutputMultiple = consoleOutputMultiple;
//# sourceMappingURL=console.js.map