"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("./Program");
class InteractiveProgram extends Program_1.default {
    constructor(inputs, options, callBack) {
        super(inputs, Program_1.commandTypes.STREAM_CONSOLE, options);
        this._callBack = callBack;
    }
    run(input, dispatch) {
        const args = InteractiveProgram.splitArgs(input);
        return this._callBack(args, dispatch);
    }
}
exports.default = InteractiveProgram;
//# sourceMappingURL=InteractiveProgram.js.map