"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const console_1 = require("../../actions/console");
const Repl_1 = require("../presentation/Repl");
const boot_1 = require("../../utility/boot");
const ga = require("react-ga");
const cursorBlink = (blinkRate, dispatch) => setInterval(() => {
    dispatch(console_1.toggleHideCursor());
}, blinkRate);
const mapKeyToAction = (event, input, dispatch) => {
    let key = event.key.toLowerCase();
    if (event.ctrlKey) {
        switch (key) {
            case "c":
                dispatch(console_1.inputClear());
                return;
        }
    }
    if (event.metaKey) {
        // Exceptions for keyboard capture
        switch (key) {
            case "r":
            case "j":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                return;
        }
    }
    switch (key) {
        case "alt":
        case "tab":
        case "meta":
        case "shift":
        case "control":
        case "capslock":
        case "arrowleft":
        case "arrowright":
        case "contextmenu":
            return;
        case "escape":
            event.preventDefault();
            dispatch(console_1.consoleClear());
            dispatch(console_1.consoleClose());
            break;
        case "arrowdown":
            event.preventDefault();
            return dispatch(console_1.consoleDown());
        case "arrowup":
            event.preventDefault();
            return dispatch(console_1.consoleUp());
        case "delete":
        case "backspace":
            event.preventDefault();
            return dispatch(console_1.consoleDelete());
        case "enter":
            event.preventDefault();
            return dispatch(console_1.consoleRunCommand(input));
        default:
            event.preventDefault();
            return dispatch(console_1.consoleInput(key));
    }
};
const mapBootKeyToAction = (event, dispatch) => {
    if (event.key.toLowerCase() === 'enter') {
        // Register boot event in Google Analytics
        ga.pageview('/');
        dispatch(boot_1.default());
    }
};
const mapStateToProps = state => state.console;
const mapDispatchToProps = dispatch => ({
    bootKeyPress: event => mapBootKeyToAction(event, dispatch),
    keyPress: (event, input) => mapKeyToAction(event, input, dispatch),
    startBlink: blinkRate => cursorBlink(blinkRate, dispatch)
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Repl_1.default);
//# sourceMappingURL=Repl.js.map