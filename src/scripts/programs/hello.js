import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

const hello = new Program('hello', {
    type: ProgramType.PRINT_OUTPUT,
    aliases: ['hello', 'hi'],
    responses: ['hi there']
  }
);

export default hello
