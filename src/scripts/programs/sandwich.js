import Command, {commandTypes} from "../models/Command";

const sandwich = new Command(
  ['sandwich', 'make me a sandwich'],
  commandTypes.PRINT_OUTPUT,
  {responses: ['What? make it yourself']}
);

export default sandwich;
