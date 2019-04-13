"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InteractiveProgram_1 = require("../models/InteractiveProgram");
const ProgramManager_1 = require("./ProgramManager");
const console_1 = require("../actions/console");
const man = new InteractiveProgram_1.default(['man'], { helpText: 'display the manual for a command' }, (args, dispatch) => {
    // Loop through all args passed in
    args.forEach(arg => {
        // Attempt to match a command
        const command = ProgramManager_1.default.findProgram(arg);
        // Error if a command or helpText was not found
        if (!command || !command.helpText) {
            dispatch(console_1.consoleOutput({
                style: ['error'],
                output: 'no manual entry for ' + arg
            }));
            return;
        }
        // Log the help text
        dispatch(console_1.consoleOutput({
            style: ['response'],
            output: command.helpText
        }));
    });
});
exports.default = man;
//# sourceMappingURL=man.js.map