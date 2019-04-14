import IProgram from '../interfaces/IProgram'
import IProgramManager from "../interfaces/IProgramManager";
import changePrompt from './changePrompt';
import exit from './exit';
import skills from './skills'
import hello from './hello';
import help from './help';
import echo from './echo';
import about from './about';
import contact from './contact';
import clear from "./clear";
import work from './work';
import man from './man';

class ProgramManager implements IProgramManager {
  private programs: IProgram[];

  constructor(initialPrograms?: IProgram[]) {
    this.programs = initialPrograms || [];
  }

  registerProgram(program: IProgram) {
    this.programs.push(program);
  }

  findProgram(query: string) {
    return this.programs.find(program => program.getAliases().includes(query.split(' ')[0]))
  };

  getPrograms() {
    return this.programs
  }
}

const programManager = new ProgramManager(
  [exit, clear, about, skills, contact, work, changePrompt, echo, man, hello, help]
);

export class ProgramManagerHelper {
  static getProgramManager() {
    return programManager;
  }
}

export default programManager;
