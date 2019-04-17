import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

export default new Program('message', {
    aliases: ['email'],
    type: ProgramType.STREAM_CONSOLE,
    helpText: 'Sends a message to me.'
  },
  (args, dispatch) => {
  }
);