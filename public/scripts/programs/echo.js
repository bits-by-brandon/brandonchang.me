"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InteractiveProgram_1 = require("../models/InteractiveProgram");
const console_1 = require("../actions/console");
const echo = new InteractiveProgram_1.default(['echo'], { helpText: 'prints the passed in arguments' }, (args, dispatch) => {
    dispatch(console_1.consoleOutput({ style: ['response'], output: args.join(' ') }));
});
exports.default = echo;
//# sourceMappingURL=echo.js.map