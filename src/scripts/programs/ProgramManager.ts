import IProgram from '../interfaces/IProgram'
import IProgramManager from "../interfaces/IProgramManager";
import changePrompt from './changePrompt';
import exit from './exit';
// import './skills'
// import './hello';
import help from './help';
import echo from './echo';
// import './about';
import contact from './contact';
import clear from "./clear";
// import './work';
import man from './man';

// import './sandwich';

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
  [contact, clear, help, exit, changePrompt, echo, man]
);

export class ProgramManagerHelper {
  static getProgramManager() {
    return programManager;
  }
}

export default programManager;
