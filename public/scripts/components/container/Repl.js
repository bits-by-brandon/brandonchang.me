"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const console_1 = require("../../actions/console");
const Repl_1 = require("../presentation/Repl");
const boot_1 = require("../../utility/boot");
const react_ga_1 = require("react-ga");
// TODO: Figure out a better way to initialize programs & InteractiveProgram manager
require("../../programs/index");
const cursorBlink = (blinkRate, dispatch) => setInterval(() => {
    dispatch(console_1.toggleHideCursor());
}, blinkRate);
const mapKeyToAction = (event, input, dispatch) => {
    let key = event.key.toLowerCase();
    if (event.metaKey) {
        // Exceptions for keyboard capture
        switch (key) {
            case "r":
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
        react_ga_1.default.event({ category: 'Boot', action: 'Keyboard Boot', label: 'Standard' });
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