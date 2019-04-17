"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../actions/console");
class InputObserver {
    constructor() {
        this.subscriptions = [];
    }
    emit(action) {
        this.subscriptions.forEach(s => s(action));
    }
    subscribe(subscription) {
        this.subscriptions.push(subscription);
    }
    unSubscribe() {
    }
    event(event, input) {
        let key = event.key.toLowerCase();
        if (event.ctrlKey) {
            switch (key) {
                case "c":
                    this.emit(console_1.inputClear());
                    return;
            }
        }
        if (event.metaKey && key.match(/\d|r|j/)) {
            return;
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
                this.emit(console_1.consoleClose());
                break;
            case "arrowdown":
                event.preventDefault();
                this.emit(console_1.consoleDown());
                break;
            case "arrowup":
                event.preventDefault();
                this.emit(console_1.consoleUp());
                break;
            case "delete":
            case "backspace":
                event.preventDefault();
                this.emit(console_1.consoleDelete());
                break;
            case "enter":
                event.preventDefault();
                this.emit(console_1.consoleSubmit());
                break;
            default:
                event.preventDefault();
                this.emit(console_1.consoleInput(key));
        }
    }
}
exports.InputObserver = InputObserver;
const inputObserver = new InputObserver();
class InputObserverHelper {
    static getInputObserver() {
        return inputObserver;
    }
}
exports.InputObserverHelper = InputObserverHelper;
// Program callback
let test = (args, dispatch) => {
    const io = InputObserverHelper.getInputObserver();
    const handleInput = (action) => {
        console.log(action.type);
    };
    io.subscribe(handleInput);
};
//# sourceMappingURL=InputObserver.js.map