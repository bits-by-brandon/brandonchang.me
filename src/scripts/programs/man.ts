import {ProgramManagerHelper} from "./ProgramManager";
import {actionCreators} from "../actions/console";
const {consoleNewLine, consoleOutput} = actionCreators;
import {OutputType} from "../types/Output";
import Program from "../models/Program";

export default new Program('man', {helpText: 'display the manual for a command'},
  (args, dispatch) => {
    // Error messaging
    if (args.length !== 1) {
      dispatch(consoleOutput([
        {style: [OutputType.ERROR], output: 'you must provide a single argument'},
        {style: [OutputType.ERROR], output: 'ex: "man prompt"'},
      ]));
      dispatch(consoleNewLine());
      return;
    }

    const programManager = ProgramManagerHelper.getProgramManager();

    const program = programManager.findProgram(args[0]);

    // Error if a command or helpText was not found
    if (!program || !program.getHelpText()) {
      dispatch(consoleOutput({style: [OutputType.ERROR], output: 'no manual entry for ' + args[0]}));
      dispatch(consoleNewLine());
      return;
    }

    // Log the help text
    dispatch(consoleOutput({style: [OutputType.STANDARD], output: program.getHelpText()}));
    dispatch(consoleNewLine());
  }
);
