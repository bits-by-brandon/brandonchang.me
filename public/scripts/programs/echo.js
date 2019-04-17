"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../actions/console");
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
const ConsoleOutput_1 = require("../models/ConsoleOutput");
exports.default = new Program_1.default('echo', {
    type: IProgram_1.ProgramType.STREAM_CONSOLE,
    helpText: 'prints the passed in arguments'
}, (args, dispatch) => {
    if (args.length > 0) {
        dispatch(console_1.consoleOutput({ style: [ConsoleOutput_1.OutputType.STANDARD], output: '< ' + args.join(' ') }));
        dispatch(console_1.consoleNewLine());
    }
    else {
        dispatch(console_1.consoleOutput({ style: [ConsoleOutput_1.OutputType.ERROR], output: 'You must pass in at least one argument' }));
        dispatch(console_1.consoleOutput({ style: [ConsoleOutput_1.OutputType.ERROR], output: 'ex: "echo hello, world!"' }));
        dispatch(console_1.consoleNewLine());
    }
});
//# sourceMappingURL=echo.js.map