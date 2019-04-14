import {consoleNewLine, consoleOutput} from "../actions/console";
import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";
import {OutputType} from "../models/ConsoleOutput";

export default new Program('echo',
  {
    type: ProgramType.STREAM_CONSOLE,
    helpText: 'prints the passed in arguments'
  },
  (args, dispatch) => {
    if (args.length > 0) {
      dispatch(consoleOutput({style: [OutputType.STANDARD], output: '< ' + args.join(' ')}));
      dispatch(consoleNewLine());
    } else {
      dispatch(consoleOutput({style: [OutputType.ERROR], output: 'You must pass in at least one argument'}));
      dispatch(consoleOutput({style: [OutputType.ERROR], output: 'ex: "echo hello, world!"'}));
      dispatch(consoleNewLine());
    }
  }
);
