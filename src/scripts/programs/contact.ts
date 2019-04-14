import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

export default new Program('contact', {
    type: ProgramType.PRINT_OUTPUT,
    helpText: 'lists contact information',
    responses: [
      ' ',
      'email:    brandon@brandonchang.me',
      'github:   <a href="http://github.com/brandondc741" target="_blank">github.com/brandondc741</a>',
      'linkedin: <a href="https://www.linkedin.com/in/brandon-chang-b27769182" target="_blank">linkedin</a>',
      // ' ',
      // "< want to get in touch?",
      // "< Use the 'message' command",
    ],
  }
);
