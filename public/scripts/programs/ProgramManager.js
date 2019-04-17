"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changePrompt_1 = require("./changePrompt");
const exit_1 = require("./exit");
const skills_1 = require("./skills");
const hello_1 = require("./hello");
const help_1 = require("./help");
const echo_1 = require("./echo");
const about_1 = require("./about");
const contact_1 = require("./contact");
const clear_1 = require("./clear");
const work_1 = require("./work");
const man_1 = require("./man");
const parseArgs_1 = require("../utility/parseArgs");
class ProgramManager {
    constructor(initialPrograms) {
        this.programs = initialPrograms || [];
        this.activeProgram = null;
    }
    registerProgram(program) {
        this.programs.push(program);
    }
    findProgram(query) {
        return this.programs.find(program => program.getAliases().includes(query.split(' ')[0]));
    }
    ;
    runProgram(query) {
        if ()
            const program = this.findProgram(query);
        if (!program) {
            throw new Error('Command not found: ' + query);
        }
        program.run(parseArgs_1.default(query));
    }
    getPrograms() {
        return this.programs;
    }
    getActiveProgram() {
        return this.activeProgram;
    }
}
const programManager = new ProgramManager([exit_1.default, clear_1.default, about_1.default, skills_1.default, contact_1.default, work_1.default, changePrompt_1.default, echo_1.default, man_1.default, hello_1.default, help_1.default]);
class ProgramManagerHelper {
    static getProgramManager() {
        return programManager;
    }
}
exports.ProgramManagerHelper = ProgramManagerHelper;
exports.default = programManager;
//# sourceMappingURL=ProgramManager.js.map