import OutputStatusLine, {LINE_STATUS} from './OutputStatusLine';

it('throws on invalid constructor arguments', () => {
    expect(() => {
        new OutputStatusLine(['output'], 'LOADED', 'hello, world');
    }).toThrow();

    expect(() => {
        new OutputStatusLine(['output'], LINE_STATUS.LOADING);
    }).toThrow();
});

it('sets a default status', () => {
    const outputLine = new OutputStatusLine(['output'], undefined, 'hello, world');

    expect(outputLine.status).toEqual(LINE_STATUS.LOADING);
});

it('rejects an invalid new status', () => {
    const outputLine = new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'hello, world');

    expect(() => {
        outputLine.status = 'INVALID_STATUS'
    }).toThrow();
});

it('accepts a valid new status', () => {
    const outputLine = new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'hello, world');
    outputLine.status = LINE_STATUS.OK;

    expect(outputLine.status).toEqual(LINE_STATUS.OK);
});

it('generates a correct output', () => {
    const outputLine = new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'hello, world');

    expect(outputLine.getOutput()).toEqual({style: ['output'], output: '[ .... ] hello, world'});
});

it('generates correct output after being changed', () => {
    const outputLine = new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'hello, world');

    expect(outputLine.getOutput()).toEqual({style: ['output'], output: '[ .... ] hello, world'});

    outputLine.status = LINE_STATUS.OK;
    expect(outputLine.getOutput()).toEqual({style: ['output'], output: '[  OK  ] hello, world'});

    outputLine.status = LINE_STATUS.FAIL;
    expect(outputLine.getOutput()).toEqual({style: ['output'], output: '[ FAIL ] hello, world'});
});
