import Program from "../models/Program";
import {matchCommand} from "./index";
import {consoleOutput} from "../actions/console";

const man = new Program(
    ['man'],
    {helpText: 'display the manual for a command'},
    (args, dispatch) => {
        // Loop through all args passed in
        args.forEach(arg => {
            // Attempt to match a command
            const command = matchCommand(arg);

            // Error if a command or helpText was not found
            if (!command || !command.helpText) {
                dispatch(consoleOutput({
                    style: ['error'],
                    output: 'no manual entry for ' + arg
                }));
                return;
            }

            // Log the help text
            dispatch(consoleOutput({
                style: ['response'],
                output: command.helpText
            }));
        });
    }
);

export default man;