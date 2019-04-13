import React from "react";
import Program from "../models/Program";
import {programType} from "../interfaces/IProgram";

export default new Program('contact', {
    type: programType.PRINT_OUTPUT,
    helpText: 'lists contact information',
    responses: [
      'email:  brandon@brandonchang.me',
      'github: http://github.com/brandondc741',
    ],
  }
);
