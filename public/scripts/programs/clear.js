"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IProgram_1 = require("../interfaces/IProgram");
const Program_1 = require("../models/Program");
const console_1 = require("../actions/console");
exports.default = new Program_1.default('clear', {
    type: IProgram_1.ProgramType.CLEAR_CONSOLE,
    helpText: 'clears the console history'
}, (args, dispatch) => {
    dispatch(console_1.consoleClear());
});
//# sourceMappingURL=clear.js.map