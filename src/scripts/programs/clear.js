import {commandTypes} from "../models/Command";
import Command from "../models/Command";

const clear = new Command(
    ['clear'],
    commandTypes.CLEAR_CONSOLE,
    {helpText: 'clears the console history'}
);

export default clear;
