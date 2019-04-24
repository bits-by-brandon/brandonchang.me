import IProgram, {ProgramType} from "../interfaces/IProgram"
import IProgramManager from "../interfaces/IProgramManager";
import {AnyAction, Dispatch} from "redux";
import parseArgs from "../utility/parseArgs";
import IObservable from "../interfaces/IObservable";
import IShell from "../interfaces/IShell";

export default class ProgramManager implements IProgramManager {
  private readonly programs: IProgram[];
  private readonly dispatch: Dispatch;
  private activeProgram: IProgram | null;
  private unsubscribe: () => void;
  private shell: IShell;

  constructor(inputObserver: IObservable, dispatch: Dispatch, shell: IShell, initialPrograms?: IProgram[]) {
    this.programs = initialPrograms || [];
    this.activeProgram = null;
    this.dispatch = dispatch;
    this.shell = shell;
    this.unsubscribe = inputObserver.subscribe(this.handleInput);
  }

  handleInput(action: AnyAction) {
    if(this.activeProgram !== null) {
      this.activeProgram.sendInput(action);
    } else {
      this.shell.sendInput(action);
    }
  }

  registerProgram(program: IProgram) {
    // Check for existing aliases before registering program
    program.getAliases().forEach((alias: string) => {
      if (this.findProgram(alias)) {
        throw `Cannot register program ${program.getCommandName()}, it has conflicting aliases with another registered program`;
      }
    });

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

    if()

    if(program.getCommandType() === ProgramType.INTERACTIVE) {
      this.activeProgram = program;
    }

    program.run(parseArgs(query), this.dispatch);
  }

  getPrograms() {
    return this.programs
  }

  getActiveProgram() {
    return this.activeProgram;
  }
}
