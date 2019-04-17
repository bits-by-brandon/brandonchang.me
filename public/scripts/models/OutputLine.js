"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OutputLine {
    set style(value) {
        this._style = value;
    }
    set text(value) {
        this._text = value;
    }
    get style() {
        return this._style;
    }
    get text() {
        return this._text;
    }
    getOutput() {
        return { output: this._text, style: this._style };
    }
    /**
     * @param {array} style
     * @param {string} text
     */
    constructor(style = ['output'], text) {
        if (typeof text !== 'string') {
            throw '{string} text constructor argument is required';
        }
        if (typeof style !== 'object') {
            throw 'style must be an array';
        }
        this._text = text;
        this._style = style;
    }
}
exports.default = OutputLine;
//# sourceMappingURL=OutputLine.js.map