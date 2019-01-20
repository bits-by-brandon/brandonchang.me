import Command, {commandTypes} from "../models/Command";

const exit = new Command(
    ['exit', 'close', 'quit', ':q', ':q!', 'q', 'q!'],
    commandTypes.EXIT_CONSOLE,
    {helpText: 'exits console mode'}
);

export default exit;
