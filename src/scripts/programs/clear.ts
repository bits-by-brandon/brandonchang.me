import {ProgramType} from "../interfaces/IProgram";
import Program from "../models/Program";
import {consoleClear} from "../actions/console";

const clear = new Program('clear',
  {
    type: ProgramType.CLEAR_CONSOLE,
    helpText: 'clears the console history'
  }, (args, dispatch) => {
    dispatch(consoleClear());
  }
);

export default clear;
