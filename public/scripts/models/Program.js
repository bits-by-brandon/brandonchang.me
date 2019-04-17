"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../actions/console");
const ConsoleOutput_1 = require("./ConsoleOutput");
class Program {
    constructor(programName, options, callback) {
        const { responses, helpText, aliases = [], type } = options;
        this._programName = programName;
        this._aliases = aliases.concat(programName);
        this._type = type;
        this._responses = responses;
        this._helpText = helpText;
        this._callback = callback;
    }
    getHelpText() {
        return this._helpText;
    }
    getResponses() {
        return this._responses;
    }
    getCommandName() {
        return this._programName;
    }
    getAliases() {
        return this._aliases;
    }
    getCommandType() {
        return this._type;
    }
    /**
     * Runs the program, allowing it to dispatch its own actions
     *
     * @param args - Arguments passed in to the program
     * @param dispatch
     */
    run(args, dispatch) {
        if (this._callback) {
            this._callback(args, dispatch);
        }
        if (this._responses && this._responses.length > 0) {
            Program.printResponse(this._responses, dispatch);
            dispatch(console_1.consoleNewLine());
        }
    }
    /**
     * Standard action run when no program callback is provided. Prints out responses to the console
     *
     * @param responses
     * @param dispatch
     */
    static printResponse(responses, dispatch) {
        dispatch(console_1.consoleOutput(responses.map(r => ({ style: [ConsoleOutput_1.OutputType.STANDARD], output: r }))));
    }
}
exports.default = Program;
//# sourceMappingURL=Program.js.map