"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const hello = new Program_1.default(['hello', 'hi'], Program_1.commandTypes.PRINT_OUTPUT, { responses: ['hi there'] });
exports.default = hello;
//# sourceMappingURL=hello.js.map