import Command, {commandTypes} from "../models/Command";

const hello = new Command(
    ['hello', 'hi'],
    commandTypes.PRINT_OUTPUT,
    {responses: ['hi there']}
);

export default hello
