"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramManager_1 = require("./ProgramManager");
const console_1 = require("../actions/console");
const ConsoleOutput_1 = require("../models/ConsoleOutput");
const Program_1 = require("../models/Program");
exports.default = new Program_1.default('man', { helpText: 'display the manual for a command' }, (args, dispatch) => {
    // Error messaging
    if (args.length !== 1) {
        dispatch(console_1.consoleOutput([
            { style: [ConsoleOutput_1.OutputType.ERROR], output: 'you must provide a single argument' },
            { style: [ConsoleOutput_1.OutputType.ERROR], output: 'ex: "man prompt"' },
        ]));
        dispatch(console_1.consoleNewLine());
        return;
    }
    const programManager = ProgramManager_1.ProgramManagerHelper.getProgramManager();
    const program = programManager.findProgram(args[0]);
    // Error if a command or helpText was not found
    if (!program || !program.getHelpText()) {
        dispatch(console_1.consoleOutput({ style: [ConsoleOutput_1.OutputType.ERROR], output: 'no manual entry for ' + args[0] }));
        dispatch(console_1.consoleNewLine());
        return;
    }
    // Log the help text
    dispatch(console_1.consoleOutput({ style: [ConsoleOutput_1.OutputType.STANDARD], output: program.getHelpText() }));
    dispatch(console_1.consoleNewLine());
});
//# sourceMappingURL=man.js.map