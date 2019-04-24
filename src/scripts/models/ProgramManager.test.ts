import ProgramManager from './ProgramManager';
import Program from './Program';
import IObservable from "../interfaces/IObservable";
import InputObserver from "./InputObserver";
import IProgram, {ProgramType} from "../interfaces/IProgram";

// Use the Program mock found in __mocks__
jest.mock('./Program');
jest.mock('./InputObserver');

let program1: IProgram;
let program2: IProgram;
let program3: IProgram;
let io: IObservable;
let shell: any = jest.fn();
let dispatch: any = jest.fn();

beforeEach(() => {
  program1 = new Program('program1', {aliases: ['p1', 'pr1'], helpText: 'p1 help', type: ProgramType.INTERACTIVE});
  program2 = new Program('program2', {aliases: ['p2', 'pr2'], helpText: 'p2 help'});
  program3 = new Program('program3', {aliases: ['p3', 'pr3']});
  io = new InputObserver();
  dispatch.mockClear();
});

it('takes constructor arguments', () => {
  const pm = new ProgramManager(io, dispatch, shell);
  expect(pm).toBeInstanceOf(ProgramManager);
});

it('accepts programs in constructor, then gets programs', () => {
  const pm = new ProgramManager(io, dispatch, shell, [program1, program2, program3]);
  expect(pm.getPrograms()).toEqual([program1, program2, program3]);
});

it('accepts programs in constructor and via registerProgram, then gets programs', () => {
  const pm = new ProgramManager(io, dispatch, shell, [program1]);
  pm.registerProgram(program2);
  pm.registerProgram(program3);
  expect(pm.getPrograms()).toEqual([program1, program2, program3]);
});

it('throws if programNames overlap', () => {
  const overlapProgram = new Program('program1', {});
  const pm = new ProgramManager(io, dispatch, shell, [program1]);
  expect(() => {
    pm.registerProgram(overlapProgram);
  }).toThrow();
});

it('throws if program aliases overlap', () => {
  const overlapProgram = new Program('overlap', {aliases: ['p1']});
  const pm = new ProgramManager(io, dispatch, shell, [program1]);
  expect(() => {
    pm.registerProgram(overlapProgram);
  }).toThrow();
});

describe('finds programs', () => {

  it('finds a program using a program name', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1]);
    expect(pm.findProgram('program1')).toEqual(program1);
  });

  it('finds a program using a program alias', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1]);
    expect(pm.findProgram('p1')).toEqual(program1);
  });

  it('returns undefined if no program is found', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1]);
    expect(pm.findProgram('no-program')).toBeUndefined();
  });
});

describe('runs programs with active program handling', () => {

  it('runs a program using a program name', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1, program2, program3]);
    pm.runProgram('program2');
    expect(program1.run).toHaveBeenCalledTimes(0);
    expect(program2.run).toHaveBeenCalledTimes(1);
    expect(program3.run).toHaveBeenCalledTimes(0);
  });

  it('runs a program using a program alias', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1, program2, program3]);
    pm.runProgram('p2');
    expect(program1.run).toHaveBeenCalledTimes(0);
    expect(program2.run).toHaveBeenCalledTimes(1);
    expect(program3.run).toHaveBeenCalledTimes(0);
  });

  it('runs a program using a program name with arguments provided', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1, program2, program3]);
    pm.runProgram('program2 arg1 arg2');
    expect(program1.run).toHaveBeenCalledTimes(0);
    expect(program2.run).toHaveBeenCalledTimes(1);
    expect(program2.run).toHaveBeenCalledWith(['arg1', 'arg2'], dispatch);
    expect(program3.run).toHaveBeenCalledTimes(0);
  });

  it('throws if program is not found', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1, program2, program3]);
    expect(() => {
      pm.runProgram('program4');
    }).toThrow();
  });

  it('sets activeProgram if ran and is interactive', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1, program2]);
    pm.runProgram('program1');
    expect(pm.getActiveProgram()).toEqual(program1);
  });

  it('does not set activeProgram for non-interactive programs', () => {
    const pm = new ProgramManager(io, dispatch, shell, [program1, program2]);
    pm.runProgram('program2');
    expect(pm.getActiveProgram()).toBeNull();
  });
});


describe('input subscription handling', () => {

  it('initializes a subscription to the observer', () => {
    const pm = new ProgramManager(io, dispatch, shell);
    expect(io.subscribe).toHaveBeenCalledTimes(1);
  });

  // it('sends input to active program', () => {
  //   const pm = new ProgramManager(io, dispatch, shell, [program1, program2]);
  //   pm.runProgram('program1');
  //   io.notify('test');
  //
  //   expect(io.notify).toHaveBeenCalledTimes(1);
  //   expect(io.notify).toHaveBeenCalledWith(1);
  // });

  //TODO: write tests to account for subscription handling
});
