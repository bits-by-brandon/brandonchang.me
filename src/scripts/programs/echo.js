import Program from "../models/Program";
import {consoleOutput} from "../actions/console";

const echo = new Program(
    ['echo'],
    {helpText: 'prints the passed in arguments'},
    (args, dispatch) => {
        dispatch(consoleOutput({type: ['response'], output: args.join(' ')}));
    }
);

export default echo;
