"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const ProgramManager_1 = require("../programs/ProgramManager");
const commandArray = ProgramManager_1.default.listPrograms();
console.log(commandArray);
function applyConsoleCommand(state) {
    const input = state.userInput;
    const command = ProgramManager_1.default.findProgram(input);
    if (!command || typeof command !== "object") {
        return error(state, input);
    }
    switch (command.commandType) {
        case Program_1.commandTypes.CLEAR_CONSOLE:
            return Object.assign({}, state, { userInput: '', console: [] });
        case Program_1.commandTypes.HELP:
            return showHelp(state, input);
        case Program_1.commandTypes.EXIT_CONSOLE: {
            return Object.assign({}, state, { inputHistoryIndex: 0, userInput: '', inputHistory: state.inputHistory.concat(input), consoleVisible: false, console: [] });
        }
        case Program_1.commandTypes.PRINT_OUTPUT:
        default:
            // Collect output from the command
            const output = command.printOutput();
            return Object.assign({}, state, { inputHistoryIndex: 0, userInput: '', inputHistory: state.inputHistory.concat(input), consoleVisible: true, console: [
                    ...state.console,
                    { style: ['input'], output: input }
                ].concat(output) });
    }
}
exports.default = applyConsoleCommand;
/**
 *  Lists out all programs with the "helpText" property assigned
 */
function showHelp(state, input) {
    return Object.assign({}, state, { inputHistoryIndex: 0, inputHistory: state.inputHistory.concat(input), userInput: '', consoleVisible: true, console: [
            ...state.console,
            { style: ['input'], output: input },
            { style: ['response'], output: 'AVAILABLE COMMANDS' },
            { style: ['response'], output: '========================================' },
            ...commandArray
                .filter(command => command.helpText)
                .map(command => {
                let tabString = '';
                for (let i = 0; i < (state.tabSpace - command.commandName.length); i++) {
                    tabString += "\u00A0";
                }
                return {
                    style: ['response'],
                    output: command.commandName + tabString + command.helpText
                };
            })
        ] });
}
/**
 * @param state
 * @param input
 * @returns {object} newState
 */
function error(state, input) {
    return Object.assign({}, state, { inputHistoryIndex: 0, inputHistory: state.inputHistory.concat(input), userInput: '', consoleVisible: true, console: [
            ...state.console,
            { style: ['input'], output: input },
            { style: ['error'], output: 'command not found: ' + input },
            { style: ['error'], output: "type 'help' for list of available programs" }
        ] });
}
//# sourceMappingURL=commands.js.map