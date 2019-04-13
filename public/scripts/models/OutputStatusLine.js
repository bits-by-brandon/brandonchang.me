"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputLine_1 = require("./OutputLine");
exports.LINE_STATUS = {
    OK: 'OK',
    FAIL: 'FAIL',
    LOADING: 'LOADING',
};
class OutputStatusLine extends OutputLine_1.default {
    get status() {
        return this._status;
    }
    set status(value) {
        if (!exports.LINE_STATUS[value]) {
            throw ('Must provide a valid LINE_STATUS enum');
        }
        this._status = exports.LINE_STATUS[value];
    }
    static getPrettyStatus(status) {
        switch (status) {
            case 'LOADING':
                return '[ .... ]';
            case 'OK':
                return '[  OK  ]';
            case 'FAIL':
                return '[ FAIL ]';
            default:
                return status;
        }
    }
    getOutput() {
        const prettyStatus = OutputStatusLine.getPrettyStatus(this._status);
        const text = `${prettyStatus} ${this._text}`;
        return { output: text, style: this._style };
    }
    /**
     * @param {array} style
     * @param {LINE_STATUS} status
     * @param {string} text
     */
    constructor(style, status = exports.LINE_STATUS.LOADING, text) {
        super(style, text);
        if (typeof exports.LINE_STATUS[status] !== "string") {
            throw ('Must provide a valid LINE_STATUS enum. Status provided: ' + status);
        }
        this._status = exports.LINE_STATUS[status];
    }
}
exports.default = OutputStatusLine;
//# sourceMappingURL=OutputStatusLine.js.map