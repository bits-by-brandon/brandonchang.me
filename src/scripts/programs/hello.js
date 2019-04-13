import Program, {commandTypes} from "../models/Program";

const hello = new Program(
    ['hello', 'hi'],
    commandTypes.PRINT_OUTPUT,
    {responses: ['hi there']}
);

export default hello
