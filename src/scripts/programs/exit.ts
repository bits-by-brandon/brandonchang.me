import Program from "../models/Program";
import {ProgramType} from '../interfaces/IProgram';
import {consoleClear, consoleClose} from "../actions/console";

const exit = new Program('exit', {
    aliases: ['close', 'quit', ':q', ':q!', 'q', 'q!'],
    type: ProgramType.EXIT_CONSOLE,
    helpText: 'exits console mode'
  },
  (args, dispatch) => {
    dispatch(consoleClear());
    dispatch(consoleClose());
  }
);

export default exit;
