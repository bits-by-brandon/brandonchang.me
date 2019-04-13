"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProgramManager {
    constructor() {
        this.initialized = false;
        this.programs = [];
    }
    registerProgram(program) {
        this.programs.push(program);
    }
    findProgram(query) {
        return this.programs.find(program => program.inputs.includes(query.split(' ')[0]));
    }
    ;
    listPrograms() {
        return this.programs;
    }
}
exports.default = new ProgramManager();
//# sourceMappingURL=ProgramManager.js.map