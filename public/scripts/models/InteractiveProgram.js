"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("./Program");
const IProgram_1 = require("../interfaces/IProgram");
class InteractiveProgram extends Program_1.default {
    constructor(programName, options, callBack) {
        super(programName, Object.assign({}, options, { type: IProgram_1.ProgramType.STREAM_CONSOLE }), callBack);
        this._callBack = callBack;
    }
}
exports.default = InteractiveProgram;
//# sourceMappingURL=InteractiveProgram.js.map