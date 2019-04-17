"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
exports.default = new Program_1.default('message', {
    aliases: ['email'],
    type: IProgram_1.ProgramType.STREAM_CONSOLE,
    helpText: 'Sends a message to me.'
}, (args, dispatch) => {
});
//# sourceMappingURL=message.js.map