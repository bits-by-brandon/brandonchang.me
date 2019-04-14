import React from "react";
import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

export default new Program('contact', {
    type: ProgramType.PRINT_OUTPUT,
    helpText: 'lists contact information',
    responses: [
      'email:  brandon@brandonchang.me',
      'github: http://github.com/brandondc741',
    ],
  }
);
