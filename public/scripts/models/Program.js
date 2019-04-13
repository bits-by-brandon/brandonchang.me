"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Program {
    constructor(commandName, options) {
        const { responses, helpText, aliases, type } = options;
        this._commandName = commandName;
        this._aliases = aliases;
        this._type = type;
        this._responses = responses;
        this._helpText = helpText;
    }
    getHelpText() {
        return this._helpText;
    }
    getResponses() {
        return this._responses;
    }
    getCommandName() {
        return this._commandName;
    }
    getAliases() {
        return this._aliases;
    }
    getCommandType() {
        return this._type;
    }
    static splitArgs(input) {
        return input.split(' ').slice(1);
    }
    printOutput() {
        return this._responses.map(response => ({ style: ['response'], output: response }));
    }
}
exports.default = Program;
//# sourceMappingURL=Program.js.map