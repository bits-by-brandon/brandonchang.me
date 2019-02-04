import {consoleOutput, consoleSetPrompt} from "../actions/console";
import Program from "../models/Program";

const changePrompt = new Program(
    ['prompt', 'set-prompt', 'ps1'],
    { helpText: 'Change the console prompt' },
    (args, dispatch) => {
        // Print error message if invalid args provided
        if(args.length !== 1) {
            dispatch(consoleOutput([
                {style: ['error'], output: 'you must provide a single argument'},
                {style: ['error'], output: 'ex: "prompt $"'},
            ]));
            return;
        }

        // Print some info to the console
        dispatch(consoleOutput({
            style: ['response'],
            output: 'changing prompt to ' + args[0]
        }));

        // set the console prompt
        dispatch(consoleSetPrompt(args[0]));
    }
);

export default changePrompt;
