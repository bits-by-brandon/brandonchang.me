import {commandTypes} from "../models/Program";
import Program from "../models/Program";

const clear = new Program(
    ['clear'],
    commandTypes.CLEAR_CONSOLE,
    {helpText: 'clears the console history'}
);

export default clear;
