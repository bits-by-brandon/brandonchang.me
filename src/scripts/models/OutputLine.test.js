import OutputLine from './OutputLine';

it('should reject invalid constructor arguments', () => {
    expect(() => {
        new OutputLine('output');
    }).toThrow();

    expect(() => {
        new OutputLine('output', ['hello, world!']);
    }).toThrow();

    expect(() => {
        new OutputLine('output', 'hello, world!');
    }).toThrow();
});

it('returns constructed line', () => {
    const outputLine = new OutputLine(['output'], 'hello, world');
    const expectedResult = {style: ['output'], output: 'hello, world'};

    expect(outputLine.getOutput()).toEqual(expectedResult);
});

it('accepts new text and outputs new constructed line', () => {
    const outputLine = new OutputLine(['output'], 'wrong output');
    outputLine.text = 'expected output';

    expect(outputLine.text).toEqual('expected output');
    expect(outputLine.getOutput()).toEqual({style: ['output'], output: 'expected output'});
});
