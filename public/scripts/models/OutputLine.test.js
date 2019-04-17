"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputLine_1 = require("./OutputLine");
it('should reject invalid constructor arguments', () => {
    expect(() => {
        new OutputLine_1.default('output');
    }).toThrow();
    expect(() => {
        new OutputLine_1.default('output', ['hello, world!']);
    }).toThrow();
    expect(() => {
        new OutputLine_1.default('output', 'hello, world!');
    }).toThrow();
});
it('returns constructed line', () => {
    const outputLine = new OutputLine_1.default(['output'], 'hello, world');
    const expectedResult = { style: ['output'], output: 'hello, world' };
    expect(outputLine.getOutput()).toEqual(expectedResult);
});
it('accepts new text and outputs new constructed line', () => {
    const outputLine = new OutputLine_1.default(['output'], 'wrong output');
    outputLine.text = 'expected output';
    expect(outputLine.text).toEqual('expected output');
    expect(outputLine.getOutput()).toEqual({ style: ['output'], output: 'expected output' });
});
//# sourceMappingURL=OutputLine.test.js.map