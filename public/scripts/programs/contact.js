"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
exports.default = new Program_1.default('contact', {
    type: programType.PRINT_OUTPUT,
    helpText: 'lists contact information',
    responses: [
        'email:  brandon@brandonchang.me',
        'github: http://github.com/brandondc741',
    ],
});
//# sourceMappingURL=contact.js.map