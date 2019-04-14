import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

export default new Program('hello', {
    type: ProgramType.PRINT_OUTPUT,
    aliases: ['hello', 'hi', 'hey', 'sup', 'hai', 'yo'],
    responses: ['hi there']
  }
);

