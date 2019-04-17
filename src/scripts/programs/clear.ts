import {ProgramType} from "../interfaces/IProgram";
import Program from "../models/Program";
import {actionCreators} from "../actions/console";
const {consoleClear} = actionCreators;

export default new Program('clear',
  {
    type: ProgramType.CLEAR_CONSOLE,
    helpText: 'clears the console history'
  }, (args, dispatch) => {
    dispatch(consoleClear());
  }
);
