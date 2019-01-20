import Command, {commandTypes} from "../models/Command";

const help = new Command(
    ['help'],
    commandTypes.HELP,
);

export default help
