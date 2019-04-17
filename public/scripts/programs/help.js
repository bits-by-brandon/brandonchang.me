"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
const ConsoleOutput_1 = require("../models/ConsoleOutput");
const ProgramManager_1 = require("./ProgramManager");
const console_1 = require("../actions/console");
const entry_1 = require("../../entry");
const formatTab_1 = require("../utility/formatTab");
exports.default = new Program_1.default('help', {
    type: IProgram_1.ProgramType.HELP,
    aliases: ['menu']
}, (args, dispatch) => {
    const programManager = ProgramManager_1.ProgramManagerHelper.getProgramManager();
    const tabSpace = entry_1.store.getState().console.tabSpace;
    console.log(tabSpace);
    let output = programManager
        .getPrograms()
        .filter(program => program.getHelpText())
        .map(program => ({
        style: [ConsoleOutput_1.OutputType.STANDARD],
        output: formatTab_1.default(tabSpace, program.getCommandName(), program.getHelpText())
    }));
    output.unshift({ style: [ConsoleOutput_1.OutputType.STANDARD], output: 'Type the name of the command you wish to' }, { style: [ConsoleOutput_1.OutputType.STANDARD], output: 'run, then hit ENTER to load that program' }, { style: [ConsoleOutput_1.OutputType.STANDARD], output: ' ' }, { style: [ConsoleOutput_1.OutputType.EMPHASIS], output: 'AVAILABLE COMMANDS:' }, { style: [ConsoleOutput_1.OutputType.STANDARD], output: '==========================' });
    dispatch(console_1.consoleOutput(output));
    dispatch(console_1.consoleNewLine());
});
//# sourceMappingURL=help.js.map