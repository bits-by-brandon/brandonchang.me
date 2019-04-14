import {Dispatch} from "redux";
import IProgram, {ProgramType} from "../interfaces/IProgram";
import {consoleNewLine, consoleOutput} from "../actions/console";
import {ConsoleOutput, OutputType} from "./ConsoleOutput";

export interface ProgramOptions {
  type?: ProgramType,
  responses?: string[],
  helpText?: string,
  aliases?: string[]
}

export default class Program implements IProgram {
  protected _programName: string;
  protected _helpText?: string;
  protected _type: ProgramType;
  protected _responses?: string[];
  protected _aliases?: string[];
  protected _callback?: (args?: string[], dispatch?: Dispatch) => void;

  constructor(programName: string, options: ProgramOptions, callback?: (args?: string[], dispatch?: Dispatch) => void) {

    const {responses, helpText, aliases = [], type} = options;

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
  run(args: string[], dispatch: Dispatch): void {
    if (this._callback) {
      this._callback(args, dispatch);
    }
    if (this._responses && this._responses.length > 0) {
      Program.printResponse(this._responses, dispatch);
      dispatch(consoleNewLine());
    }
  }

  /**
   * Standard action run when no program callback is provided. Prints out responses to the console
   *
   * @param responses
   * @param dispatch
   */
  static printResponse(responses: string[], dispatch: Dispatch) {
    dispatch(consoleOutput(responses.map(r => ({style: [OutputType.STANDARD], output: r}))));
  }
}
