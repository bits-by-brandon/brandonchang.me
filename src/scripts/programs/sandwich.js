import Program, {commandTypes} from "../models/Program";

const sandwich = new Program(
  ['sandwich', 'make me a sandwich'],
  commandTypes.PRINT_OUTPUT,
  {responses: ['What? make it yourself']}
);

export default sandwich;
