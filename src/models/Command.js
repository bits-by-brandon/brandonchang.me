export const actionTypes = {
    PRINT_OUTPUT: 'PRINT_OUTPUT',
    CLEAR_CONSOLE: 'CLEAR_CONSOLE',
    EXIT_CONSOLE: 'EXIT_CONSOLE',
    HELP: 'HELP',
    ERROR: 'ERROR',
};

export default class Command {
    constructor(inputs, actionType, responses, helpText){
        if(!Array.isArray(inputs) || inputs.length < 1){
            throw Error('Input array is required');
        }
        if (!actionTypes[actionType]){
            throw Error('A valid actionType is required');
        }

        this.inputs = inputs;
        this.commandName = inputs[0];
        this.aliases = inputs.length > 1 ? inputs.slice(1) : null;
        this.actionType = actionType;
        this.responses = responses || [];
        this.helpText = helpText || null;
    }
}
