"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const exit = new Program_1.default(['exit', 'close', 'quit', ':q', ':q!', 'q', 'q!'], Program_1.commandTypes.EXIT_CONSOLE, { helpText: 'exits console mode' });
exports.default = exit;
//# sourceMappingURL=exit.js.map