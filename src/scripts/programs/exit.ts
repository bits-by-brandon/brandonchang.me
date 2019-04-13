import Program from "../models/Program";
import {programType} from '../interfaces/IProgram';
import {consoleClear, consoleClose} from "../actions/console";

const exit = new Program('exit', {
    aliases: ['close', 'quit', ':q', ':q!', 'q', 'q!'],
    type: programType.EXIT_CONSOLE,
    helpText: 'exits console mode'
  },
  (args, dispatch) => {
    dispatch(consoleClear());
    dispatch(consoleClose());
  }
);

export default exit;
