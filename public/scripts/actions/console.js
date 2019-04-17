"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p_queue_1 = require("p-queue");
const ProgramManager_1 = require("../programs/ProgramManager");
const utils_1 = require("../utility/utils");
const queueLines_1 = require("../utility/queueLines");
const ga = require("react-ga");
const parseArgs_1 = require("../utility/parseArgs");
const ConsoleOutput_1 = require("../models/ConsoleOutput");
const types_1 = require("../store/console/types");
const inputQueue = new p_queue_1.default({
    concurrency: 1,
});
function consoleInput(character) {
    return { type: types_1.ConsoleActionType.CONSOLE_INPUT, payload: character };
}
exports.consoleInput = consoleInput;
function consoleUp() {
    return { type: types_1.ConsoleActionType.CONSOLE_UP };
}
exports.consoleUp = consoleUp;
function consoleDown() {
    return { type: types_1.ConsoleActionType.CONSOLE_DOWN };
}
exports.consoleDown = consoleDown;
function consoleDelete() {
    return { type: types_1.ConsoleActionType.CONSOLE_DELETE };
}
exports.consoleDelete = consoleDelete;
function consoleSubmit() {
    return { type: types_1.ConsoleActionType.CONSOLE_SUBMIT };
}
exports.consoleSubmit = consoleSubmit;
function consoleClear() {
    return { type: types_1.ConsoleActionType.CONSOLE_CLEAR };
}
exports.consoleClear = consoleClear;
function consoleClose() {
    return { type: types_1.ConsoleActionType.CONSOLE_CLOSE };
}
exports.consoleClose = consoleClose;
function consoleOutput(message) {
    return { type: types_1.ConsoleActionType.CONSOLE_OUTPUT, payload: message };
}
exports.consoleOutput = consoleOutput;
function consoleNewLine() {
    return { type: types_1.ConsoleActionType.CONSOLE_NEWLINE };
}
exports.consoleNewLine = consoleNewLine;
function consoleSetScreen(console) {
    return { type: types_1.ConsoleActionType.CONSOLE_SET_SCREEN, payload: console };
}
exports.consoleSetScreen = consoleSetScreen;
function consoleSetPrompt(prompt) {
    return { type: types_1.ConsoleActionType.CONSOLE_SET_PROMPT, payload: prompt };
}
exports.consoleSetPrompt = consoleSetPrompt;
function consoleSetInitialText(initialText) {
    return { type: types_1.ConsoleActionType.CONSOLE_SET_INITIAL_TEXT, payload: initialText };
}
exports.consoleSetInitialText = consoleSetInitialText;
// TODO: Convert consoleState into enum
function consoleSetState(consoleState) {
    return { type: types_1.ConsoleActionType.CONSOLE_SET_STATE, payload: consoleState };
}
exports.consoleSetState = consoleSetState;
function consoleSetContext(context) {
    return { type: types_1.ConsoleActionType.CONSOLE_SET_CONTEXT, payload: context };
}
exports.consoleSetContext = consoleSetContext;
function toggleHideCursor() {
    return { type: types_1.ConsoleActionType.TOGGLE_HIDE_CURSOR };
}
exports.toggleHideCursor = toggleHideCursor;
function inputClear() {
    return { type: types_1.ConsoleActionType.INPUT_CLEAR };
}
exports.inputClear = inputClear;
// Thunk actions
function consoleRunCommand(input) {
    return dispatch => {
        // Clear out any queued typing
        inputQueue.clear();
        // Find the appropriate command
        const program = ProgramManager_1.default.findProgram(input);
        if (!program) {
            dispatch(consoleSubmit());
            dispatch(consoleOutput([
                { style: [ConsoleOutput_1.OutputType.ERROR], output: 'command not found: ' + input },
                { style: [ConsoleOutput_1.OutputType.STANDARD], output: "type 'help' for list of available commands" }
            ]));
            dispatch(consoleNewLine());
            return;
        }
        // Register event with Google Analytics
        ga.event({ category: 'Program', action: 'Keyboard Submit', label: input });
        // TODO: Extract console add history
        dispatch(consoleSubmit());
        return program.run(parseArgs_1.default(input), dispatch);
    };
}
exports.consoleRunCommand = consoleRunCommand;
/**
 * @param {string} input - string to enter into the console
 * @returns {Function}
 */
function consoleTypeAndSubmitCommand(input) {
    return dispatch => {
        // Clear any user input
        dispatch(inputClear());
        // Add letters to the queue for typing
        queueLines_1.queueLine(input, inputQueue, (letter) => {
            dispatch(consoleInput(letter));
        }, 60);
        // Wait a second before adding the input command
        inputQueue.add(() => utils_1.delay(200));
        // Register event with Google Analytics
        ga.event({ category: 'Program', action: 'Click Submit', label: input });
        // Submit the input command
        inputQueue.add(() => {
            dispatch(consoleSubmit());
            const program = ProgramManager_1.default.findProgram(input);
            program.run(parseArgs_1.default(input), dispatch);
        });
    };
}
exports.consoleTypeAndSubmitCommand = consoleTypeAndSubmitCommand;
/**
 * @returns {Function}
 * @param lines
 */
function consoleOutputMultiple(lines) {
    return dispatch => {
        // Clear any user input
        dispatch(inputClear());
        // Add lines to the queue for typing
        queueLines_1.queueLines(lines, inputQueue, (line) => {
            dispatch(consoleOutput(line));
        }, 200);
        // Wait a second before adding the input command
        inputQueue.add(() => utils_1.delay(200));
        // Submit the input command
        // inputQueue.add(() => dispatch(consoleSubmit()));
    };
}
exports.consoleOutputMultiple = consoleOutputMultiple;
//# sourceMappingURL=console.js.map