import Command, {commandTypes} from './Command';

class Program extends Command {
    constructor(inputs, options, callBack) {
        super(inputs, commandTypes.STREAM_CONSOLE, options);
        this._callBack = callBack;
    }

    run(input, dispatch) {
        const args = Program.splitArgs(input);
        return this._callBack(args, dispatch);
    }
}

export default Program;