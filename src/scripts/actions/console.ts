import PQueue from 'p-queue';
import {delay} from "../utility/utils";
import {queueLines} from "../utility/queueLines";
import * as ga from 'react-ga';
import parseArgs from "../utility/parseArgs";
import {Dispatch} from "redux";
import {Output, OutputType} from "../types/Output";
import {Action} from "./types";

export type ConsoleAction = Action<ConsoleActionType, any>;

export enum ConsoleActionType {
  CONSOLE_INPUT = 'CONSOLE_INPUT',
  CONSOLE_UP = 'CONSOLE_UP',
  CONSOLE_DOWN = 'CONSOLE_DOWN',
  CONSOLE_DELETE = 'CONSOLE_DELETE',
  CONSOLE_SUBMIT = 'CONSOLE_SUBMIT',
  CONSOLE_CLEAR = 'CONSOLE_CLEAR',
  CONSOLE_CLOSE = 'CONSOLE_CLOSE',
  CONSOLE_OUTPUT = 'CONSOLE_OUTPUT',
  CONSOLE_PRINT_LETTER = 'CONSOLE_PRINT_LETTER',
  CONSOLE_NEWLINE = 'CONSOLE_NEWLINE',
  CONSOLE_SET_SCREEN = 'CONSOLE_SET_SCREEN',
  CONSOLE_SET_PROMPT = 'CONSOLE_SET_PROMPT',
  CONSOLE_SET_INITIAL_TEXT = 'CONSOLE_SET_INITIAL_TEXT',
  CONSOLE_SET_STATE = 'CONSOLE_SET_STATE',
  CONSOLE_SET_CONTEXT = 'CONSOLE_SET_CONTEXT',
  CONSOLE_ADD_HISTORY = 'CONSOLE_ADD_HISTORY',
  INPUT_CLEAR = 'INPUT_CLEAR',
  TOGGLE_HIDE_CURSOR = 'TOGGLE_HIDE_CURSOR',
}

function consoleInput(character: string): Action<ConsoleActionType, string> {
  return {type: ConsoleActionType.CONSOLE_INPUT, payload: character}
}

function consoleUp(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_UP}
}

function consoleDown(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_DOWN}
}

function consoleDelete(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_DELETE}
}

function consoleSubmit(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_SUBMIT}
}

function consoleClear(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_CLEAR}
}

function consoleClose(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_CLOSE}
}

// Overloaded function signatures
function consoleOutput(output: Output[]): Action<ConsoleActionType, string>
function consoleOutput(output: Output): Action<ConsoleActionType, string>
function consoleOutput(output: any): Action<ConsoleActionType, string>{
  return {type: ConsoleActionType.CONSOLE_OUTPUT, payload: output}
}

function consoleNewLine(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.CONSOLE_NEWLINE}
}

function consoleSetScreen(console: Output[]): Action<ConsoleActionType, Output[]>{
  return {type: ConsoleActionType.CONSOLE_SET_SCREEN, payload: console}
}

function consoleSetPrompt(prompt: string): Action<ConsoleActionType, string> {
  return {type: ConsoleActionType.CONSOLE_SET_PROMPT, payload: prompt}
}

function consoleSetInitialText(initialText: string): Action<ConsoleActionType, string> {
  return {type: ConsoleActionType.CONSOLE_SET_INITIAL_TEXT, payload: initialText}
}

// TODO: Convert consoleState into enum
function consoleSetState(consoleState: string): Action<ConsoleActionType, string> {
  return {type: ConsoleActionType.CONSOLE_SET_STATE, payload: consoleState}
}

function consoleSetContext(context: string): Action<ConsoleActionType, string> {
  return {type: ConsoleActionType.CONSOLE_SET_CONTEXT, payload: context}
}

function toggleHideCursor(): Action<ConsoleActionType.TOGGLE_HIDE_CURSOR> {
  return {type: ConsoleActionType.TOGGLE_HIDE_CURSOR}
}

function inputClear(): Action<ConsoleActionType> {
  return {type: ConsoleActionType.INPUT_CLEAR}
}

export const actionCreators = {
  consoleInput,
  consoleUp,
  consoleDown,
  consoleDelete,
  consoleSubmit,
  consoleClear,
  consoleClose,
  consoleNewLine,
  consoleOutput,
  consoleSetScreen,
  consoleSetPrompt,
  consoleSetInitialText,
  consoleSetState,
  consoleSetContext,
  toggleHideCursor,
  inputClear,
};

// Thunk actions
const inputQueue = new PQueue({
  concurrency: 1,
});

// export function consoleRunCommand(input: string): (dispatch: Dispatch) => void {
//   return dispatch => {
//     // Clear out any queued typing
//     inputQueue.clear();
//
//     // Find the appropriate command
//     const program = ProgramManager.findProgram(input);
//
//     if (!program) {
//       dispatch(consoleSubmit());
//       dispatch(consoleOutput([
//           {style: [OutputType.ERROR], output: 'command not found: ' + input},
//           {style: [OutputType.STANDARD], output: "type 'help' for list of available commands"}
//         ]
//       ));
//       dispatch(consoleNewLine());
//       return;
//     }
//
//     // Register event with Google Analytics
//     ga.event({category: 'Program', action: 'Keyboard Submit', label: input});
//
//     // TODO: Extract console add history
//     dispatch(consoleSubmit());
//
//     return program.run(parseArgs(input), dispatch);
//   }
// }

/**
 * @param {string} input - string to enter into the console
 * @returns {Function}
 */
// export function consoleTypeAndSubmitCommand(input: string): (dispatch: Dispatch) => void {
//   return dispatch => {
//
//     // Clear any user input
//     dispatch(inputClear());
//
//     // Add letters to the queue for typing
//     queueLine(input, inputQueue, (letter: string) => {
//       dispatch(consoleInput(letter))
//     }, 60);
//
//     // Wait a second before adding the input command
//     inputQueue.add(() => delay(200));
//
//     // Register event with Google Analytics
//     ga.event({category: 'Program', action: 'Click Submit', label: input});
//
//     // Submit the input command
//     inputQueue.add(() => {
//       dispatch(consoleSubmit());
//       const program = ProgramManager.findProgram(input);
//       program.run(parseArgs(input), dispatch);
//     });
//   }
// }

/**
 * @returns {Function}
 * @param lines
 */
// export function OutputMultiple(lines: Output[]): (dispatch: Dispatch) => void {
//   return dispatch => {
//
//     // Clear any user input
//     dispatch(inputClear());
//
//     // Add lines to the queue for typing
//     queueLines(lines, inputQueue, (line: Output) => {
//       dispatch(consoleOutput(line))
//     }, 200);
//
//     // Wait a second before adding the input command
//     inputQueue.add(() => delay(200));
//
//     // Submit the input command
//     // inputQueue.add(() => dispatch(consoleSubmit()));
//   }
// }
