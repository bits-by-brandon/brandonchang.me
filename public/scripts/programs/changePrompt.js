"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../actions/console");
const InteractiveProgram_1 = require("../models/InteractiveProgram");
const changePrompt = new InteractiveProgram_1.default(['prompt', 'set-prompt', 'ps1'], { helpText: 'Change the console prompt' }, (args, dispatch) => {
    // Print error message if invalid args provided
    if (args.length !== 1) {
        dispatch(console_1.consoleOutput([
            { style: ['error'], output: 'you must provide a single argument' },
            { style: ['error'], output: 'ex: "prompt $"' },
        ]));
        return;
    }
    // Print some info to the console
    dispatch(console_1.consoleOutput({
        style: ['response'],
        output: 'changing prompt to ' + args[0]
    }));
    // set the console prompt
    dispatch(console_1.consoleSetPrompt(args[0]));
});
exports.default = changePrompt;
//# sourceMappingURL=changePrompt.js.map