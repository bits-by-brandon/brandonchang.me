import IProgram from '../interfaces/IProgram'
import IProgramManager from "../interfaces/IProgramManager";
import IInputObserver from "../interfaces/IInputObserver";
import {InputObserverHelper} from "../models/InputObserver";
import {AnyAction, Dispatch} from "redux";
import {store} from "../../entry";
import parseArgs from "../utility/parseArgs";

// Program imports
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
  private readonly programs: IProgram[];
  private activeProgram: IProgram | null;
  private dispatch: Dispatch;
  private unsubscribe: () => void;

  constructor(inputObserver: IInputObserver, dispatch: Dispatch, initialPrograms?: IProgram[]) {
    this.programs = initialPrograms || [];
    this.activeProgram = null;
    this.dispatch = dispatch;
    this.unsubscribe = inputObserver.subscribe(this.handleInput);
  }

  handleInput(action: AnyAction) {
    console.log();
  }

  registerProgram(program: IProgram) {
    this.programs.push(program);
  }

  findProgram(query: string) {
    return this.programs.find(program => program.getAliases().includes(query.split(' ')[0]))
  };

  /**
   * Sets the currently active program to found program and attempts to run program
   */
  runProgram(query: string) {
    const program = this.findProgram(query);
    if (!program) {
      throw new Error('Command not found: ' + query);
    }
    this.activeProgram = program;
    program.run(parseArgs(query), this.dispatch);
  }

  getPrograms() {
    return this.programs
  }

  getActiveProgram() {
    return this.activeProgram;
  }
}

const inputObserver = InputObserverHelper.getInputObserver();

const programManager = new ProgramManager(inputObserver, store.dispatch, [
  exit, clear, about, skills, contact, work, changePrompt, echo, man, hello, help
]);

export class ProgramManagerHelper {
  static getProgramManager() {
    return programManager;
  }
}

export default programManager;
