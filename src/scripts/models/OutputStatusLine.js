import OutputLine from "./OutputLine";

export const LINE_STATUS = {
    OK: 'OK',
    FAIL: 'FAIL',
    LOADING: 'LOADING',
};

class OutputStatusLine extends OutputLine {
    get status() {
        return this._status;
    }

    set status(value) {
        if (!LINE_STATUS[value]) {
            throw ('Must provide a valid LINE_STATUS enum');
        }

        this._status = LINE_STATUS[value];
    }

    static getPrettyStatus(status) {
        switch (status) {
            case 'LOADING':
                return '[ .... ]';
            case 'OK':
                return '[  OK  ]';
            case 'FAIL':
                return '[ FAIL ]';
            default:
                return status;
        }
    }

    getOutput() {
        const prettyStatus = OutputStatusLine.getPrettyStatus(this._status);

        const text = `${prettyStatus} ${this._text}`;

        return {output: text, style: this._style};
    }

    /**
     * @param {array} style
     * @param {LINE_STATUS} status
     * @param {string} text
     */
    constructor(style, status = LINE_STATUS.LOADING, text) {
        super(style, text);

        if (typeof LINE_STATUS[status] !== "string") {
            throw ('Must provide a valid LINE_STATUS enum. Status provided: ' + status);
        }

        this._status = LINE_STATUS[status];
    }
}

export default OutputStatusLine;