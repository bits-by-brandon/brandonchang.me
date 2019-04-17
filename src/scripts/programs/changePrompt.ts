import {actionCreators} from "../actions/console";
const {consoleNewLine, consoleOutput, consoleSetPrompt} = actionCreators;
import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";
import {OutputType} from "../types/Output";

export default new Program('prompt', {
    type: ProgramType.STREAM_CONSOLE,
    aliases: ['set-prompt', 'ps1'],
    helpText: 'Change the console prompt'
  },
  (args, dispatch) => {
    // Print error message if invalid args provided
    if (args.length !== 1) {
      dispatch(consoleOutput([
        {style: [OutputType.ERROR], output: 'you must provide a single argument'},
        {style: [OutputType.ERROR], output: 'ex: "prompt $"'},
      ]));
      dispatch(consoleNewLine());
      return;
    }

    // Print some info to the console
    dispatch(consoleOutput({style: [OutputType.STANDARD], output: 'changing prompt to ' + args[0]}));
    dispatch(consoleNewLine());

    // set the console prompt
    dispatch(consoleSetPrompt(args[0]));
  }
);
