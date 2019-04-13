import Program from "../models/Program";
import {programType} from "../interfaces/IProgram";
import {OutputType} from "../models/ConsoleOutput";
import {ProgramManagerHelper} from "./ProgramManager";
import {consoleNewLine, consoleOutput} from "../actions/console";

const help = new Program('help', {type: programType.HELP}, (args, dispatch) => {
    const programManager = ProgramManagerHelper.getProgramManager();
    let output = programManager
      .getPrograms()
      .filter(program => program.getHelpText())
      .map(program => ({
        style: [OutputType.STANDARD],
        output: program.getCommandName() + '\t' + program.getHelpText()
      }));

    output.unshift(
      {style: [OutputType.STANDARD], output: 'Type the name of the command you wish to'},
      {style: [OutputType.STANDARD], output: 'run, then hit ENTER to load that program'},
      {style: [OutputType.STANDARD], output: ' '},
      {style: [OutputType.EMPHASIS], output: 'AVAILABLE COMMANDS:'},
      {style: [OutputType.STANDARD], output: '=========================='},
    );

    dispatch(consoleOutput(output));
    dispatch(consoleNewLine());
  }
);

export default help