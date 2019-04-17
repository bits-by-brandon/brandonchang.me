import Program from "../models/Program";
import {ProgramType} from '../interfaces/IProgram';
import {actionCreators} from "../actions/console";
const {consoleClear, consoleClose} = actionCreators;

export default new Program('exit', {
    aliases: ['close', 'quit', ':q', ':q!', 'q', 'q!'],
    type: ProgramType.EXIT_CONSOLE,
    helpText: 'exits console mode'
  },
  (args, dispatch) => {
    dispatch(consoleClear());
    dispatch(consoleClose());
  }
);
