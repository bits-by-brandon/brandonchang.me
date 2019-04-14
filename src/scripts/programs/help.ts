import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";
import {OutputType} from "../models/ConsoleOutput";
import {ProgramManagerHelper} from "./ProgramManager";
import {consoleNewLine, consoleOutput} from "../actions/console";
import {store} from '../../entry';
import formatTab from "../utility/formatTab";

export default new Program('help', {
    type: ProgramType.HELP,
    aliases: ['menu']
  }, (args, dispatch) => {
    const programManager = ProgramManagerHelper.getProgramManager();
    const tabSpace = store.getState().console.tabSpace;
    console.log(tabSpace);
    let output = programManager
      .getPrograms()
      .filter(program => program.getHelpText())
      .map(program => ({
        style: [OutputType.STANDARD],
        output: formatTab(tabSpace, program.getCommandName(), program.getHelpText())
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
