import InteractiveProgram from "../models/InteractiveProgram";
import ProgramManager from "./ProgramManager";
import {consoleOutput} from "../actions/console";

const man = new InteractiveProgram(
    ['man'],
    {helpText: 'display the manual for a command'},
    (args, dispatch) => {
        // Loop through all args passed in
        args.forEach(arg => {
            // Attempt to match a command
            const command = ProgramManager.findProgram(arg);

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