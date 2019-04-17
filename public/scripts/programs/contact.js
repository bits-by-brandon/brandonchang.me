"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
exports.default = new Program_1.default('contact', {
    type: IProgram_1.ProgramType.PRINT_OUTPUT,
    helpText: 'lists contact information',
    responses: [
        ' ',
        'email:    brandon@brandonchang.me',
        'github:   <a href="http://github.com/brandondc741" target="_blank">github.com/brandondc741</a>',
        'linkedin: <a href="https://www.linkedin.com/in/brandon-chang-b27769182" target="_blank">linkedin</a>',
    ],
});
//# sourceMappingURL=contact.js.map