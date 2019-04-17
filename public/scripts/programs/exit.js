"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
const console_1 = require("../actions/console");
exports.default = new Program_1.default('exit', {
    aliases: ['close', 'quit', ':q', ':q!', 'q', 'q!'],
    type: IProgram_1.ProgramType.EXIT_CONSOLE,
    helpText: 'exits console mode'
}, (args, dispatch) => {
    dispatch(console_1.consoleClear());
    dispatch(console_1.consoleClose());
});
//# sourceMappingURL=exit.js.map