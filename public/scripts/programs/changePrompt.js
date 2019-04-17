"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../actions/console");
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
const ConsoleOutput_1 = require("../models/ConsoleOutput");
exports.default = new Program_1.default('prompt', {
    type: IProgram_1.ProgramType.STREAM_CONSOLE,
    aliases: ['set-prompt', 'ps1'],
    helpText: 'Change the console prompt'
}, (args, dispatch) => {
    // Print error message if invalid args provided
    if (args.length !== 1) {
        dispatch(console_1.consoleOutput([
            { style: [ConsoleOutput_1.OutputType.ERROR], output: 'you must provide a single argument' },
            { style: [ConsoleOutput_1.OutputType.ERROR], output: 'ex: "prompt $"' },
        ]));
        dispatch(console_1.consoleNewLine());
        return;
    }
    // Print some info to the console
    dispatch(console_1.consoleOutput({ style: [ConsoleOutput_1.OutputType.STANDARD], output: 'changing prompt to ' + args[0] }));
    dispatch(console_1.consoleNewLine());
    // set the console prompt
    dispatch(console_1.consoleSetPrompt(args[0]));
});
//# sourceMappingURL=changePrompt.js.map