import OutputStatusLine from './OutputStatusLine';
import {OutputType} from "../types/Output";

it('sets a default progress', () => {
    const outputLine = new OutputStatusLine('hello, world');

    expect(outputLine.output).toEqual('[ .... ] hello, world');
});

it('renders the loading bar', () => {
    const outputLine = new OutputStatusLine('hello, world');
    expect(outputLine.output).toEqual('[ .... ] hello, world');

    outputLine.setProgress(1);
    expect(outputLine.output).toEqual('[      ] hello, world');

    outputLine.setProgress(17);
    expect(outputLine.output).toEqual('[=     ] hello, world');

    outputLine.setProgress(34);
    expect(outputLine.output).toEqual('[==    ] hello, world');

    outputLine.setProgress(51);
    expect(outputLine.output).toEqual('[===   ] hello, world');

    outputLine.setProgress(69);
    expect(outputLine.output).toEqual('[====  ] hello, world');

    outputLine.setProgress(85);
    expect(outputLine.output).toEqual('[===== ] hello, world');

    outputLine.setProgress(99);
    expect(outputLine.output).toEqual('[======] hello, world');

    outputLine.setProgress(100);
    expect(outputLine.output).toEqual('[  OK  ] hello, world');
});

it('accepts a new style', () => {
    const outputLine = new OutputStatusLine('hello, world', [OutputType.STANDARD]);
    expect(outputLine.output).toEqual('[ .... ] hello, world');

    outputLine.style = [OutputType.ERROR];
    expect(outputLine.output).toEqual('[ .... ] hello, world');
});

