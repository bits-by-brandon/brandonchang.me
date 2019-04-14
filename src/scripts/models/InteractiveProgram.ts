import Program, {ProgramOptions} from "./Program";
import {ProgramCallback, ProgramType} from "../interfaces/IProgram";

class InteractiveProgram extends Program {
  private _callBack: ProgramCallback;

  constructor(programName: string, options: ProgramOptions, callBack: ProgramCallback) {
    super(programName, {...options, type: ProgramType.STREAM_CONSOLE}, callBack);
    this._callBack = callBack;
  }
}

export default InteractiveProgram;