import Command, {commandTypes} from './Command';

class Program extends Command {
    constructor(inputs, callBack, options) {
        super(inputs, commandTypes.STREAM_CONSOLE, options);
        this._callBack = callBack;
    }

    run(input) {
        const args = Program.splitArgs(input);
        this._callBack(args);
    }
}

export default Program;