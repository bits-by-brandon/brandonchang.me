import InteractiveProgram from "../models/InteractiveProgram";
import {consoleOutput} from "../actions/console";

const echo = new InteractiveProgram(
    ['echo'],
    {helpText: 'prints the passed in arguments'},
    (args, dispatch) => {
        dispatch(consoleOutput({style: ['response'], output: args.join(' ')}));
    }
);

export default echo;
