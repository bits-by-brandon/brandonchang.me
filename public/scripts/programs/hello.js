"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
exports.default = new Program_1.default('hello', {
    type: IProgram_1.ProgramType.PRINT_OUTPUT,
    aliases: ['hello', 'hi', 'hey', 'sup', 'hai', 'yo'],
    responses: ['hi there']
});
//# sourceMappingURL=hello.js.map