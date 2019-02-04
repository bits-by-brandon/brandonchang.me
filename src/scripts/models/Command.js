export const commandTypes = {
    PRINT_OUTPUT: 'PRINT_OUTPUT',
    STREAM_CONSOLE: 'STREAM_CONSOLE',
    CLEAR_CONSOLE: 'CLEAR_CONSOLE',
    EXIT_CONSOLE: 'EXIT_CONSOLE',
    HELP: 'HELP',
    ERROR: 'ERROR',
};

export default class Command {
    // constructor(inputs, commandType, responses, helpText){
    constructor(inputs, commandType, options = {responses: [], helpText: null}){
        const {responses, helpText} = options;

        if(!Array.isArray(inputs) || inputs.length < 1){
            throw Error('Input array is required');
        }
        if (!commandTypes[commandType]){
            throw Error('A valid commandType is required');
        }

        this._commandName = inputs[0];
        this._aliases = inputs.length > 1 ? inputs.slice(1) : null;
        this._commandType = commandType;
        this._responses = responses;
        this._helpText = helpText;
        this._inputs = inputs;
    }

    get inputs() {
        return this._inputs;
    }

    get helpText() {
        return this._helpText;
    }

    get responses() {
        return this._responses;
    }

    get commandName() {
        return this._commandName;
    }

    get aliases() {
        return this._aliases;
    }

    get commandType() {
        return this._commandType;
    }

    static splitArgs(input) {
        return input.split(' ').slice(1);
    }

    printOutput() {
        return this.responses.map(response => (
            {style: ['response'], output: response}
        ))
    }
}
