"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const Program_2 = require("../models/Program");
const clear = new Program_2.default(['clear'], Program_1.commandTypes.CLEAR_CONSOLE, { helpText: 'clears the console history' });
exports.default = clear;
//# sourceMappingURL=clear.js.map