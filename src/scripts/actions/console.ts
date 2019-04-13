import PQueue from 'p-queue';
import ProgramManager from "../programs/ProgramManager";
import {delay} from "../utility/utils";
import {queueLine, queueLines} from "../utility/queueLines";
// @ts-ignore
import ga from 'react-ga';
import parseArgs from "../utility/parseArgs";
import {Dispatch} from "redux";
import {ConsoleOutput, OutputType} from "../models/ConsoleOutput";
import {
  CONSOLE_CLEAR,
  CONSOLE_CLOSE,
  CONSOLE_DELETE,
  CONSOLE_DOWN,
  CONSOLE_INPUT,
  CONSOLE_NEWLINE,
  CONSOLE_OUTPUT,
  CONSOLE_SET_INITIAL_TEXT,
  CONSOLE_SET_PROMPT,
  CONSOLE_SET_SCREEN,
  CONSOLE_SET_STATE,
  CONSOLE_SUBMIT,
  CONSOLE_UP,
  ConsoleAction,
  INPUT_CLEAR,
  TOGGLE_HIDE_CURSOR,
} from "../store/console/types";

const inputQueue = new PQueue({
  concurrency: 1,
});

export function consoleInput(character: string): ConsoleAction {
  return {type: CONSOLE_INPUT, payload: character}
}

export function consoleUp(): ConsoleAction {
  return {type: CONSOLE_UP}
}

export function consoleDown(): ConsoleAction {
  return {type: CONSOLE_DOWN}
}

export function consoleDelete(): ConsoleAction {
  return {type: CONSOLE_DELETE}
}

export function consoleSubmit(): ConsoleAction {
  return {type: CONSOLE_SUBMIT}
}

export function consoleClear(): ConsoleAction {
  return {type: CONSOLE_CLEAR}
}

export function consoleClose(): ConsoleAction {
  return {type: CONSOLE_CLOSE}
}

// Overloaded function signatures
export function consoleOutput(message: ConsoleOutput[]): ConsoleAction
export function consoleOutput(message: ConsoleOutput): ConsoleAction
export function consoleOutput(message: any): ConsoleAction {
  return {type: CONSOLE_OUTPUT, payload: message}
}

export function consoleNewLine(): ConsoleAction {
  return {type: CONSOLE_NEWLINE}
}

export function consoleSetScreen(console: ConsoleOutput[]): ConsoleAction {
  return {type: CONSOLE_SET_SCREEN, payload: console}
}

export function consoleSetPrompt(prompt: string): ConsoleAction {
  return {type: CONSOLE_SET_PROMPT, payload: prompt}
}

export function consoleSetInitialText(initialText: string): ConsoleAction {
  return {type: CONSOLE_SET_INITIAL_TEXT, payload: initialText}
}

// TODO: Convert consoleState into enum
export function consoleSetState(consoleState: string): ConsoleAction {
  return {type: CONSOLE_SET_STATE, payload: consoleState}
}

export function toggleHideCursor() {
  return {type: TOGGLE_HIDE_CURSOR}
}

export function inputClear() {
  return {type: INPUT_CLEAR}
}

// Thunk actions
export function consoleRunCommand(input: string): (dispatch: Dispatch) => void {
  return dispatch => {
    // Clear out any queued typing
    inputQueue.clear();

    // Find the appropriate command
    const program = ProgramManager.findProgram(input);

    if (!program) {
      dispatch(consoleSubmit());
      dispatch(consoleOutput([
          {style: [OutputType.ERROR], output: 'command not found: ' + input},
          {style: [OutputType.STANDARD], output: "type 'help' for list of available commands"}
        ]
      ));
      dispatch(consoleNewLine());
      return;
    }

    // Register event with Google Analytics
    ga.event({category: 'Program', action: 'Keyboard Submit', label: input});

    // TODO: Extract console add history
    // TODO: Add CONSOLE_VISIBLE action
    dispatch(consoleSubmit());

    return program.run(parseArgs(input), dispatch);
  }
}

/**
 * @param {string} input - string to enter into the console
 * @returns {Function}
 */
export function consoleInputCommand(input: string): (dispatch: Dispatch) => void {
  return dispatch => {

    // Clear any user input
    dispatch(inputClear());

    // Add letters to the queue for typing
    queueLine(input, inputQueue, (letter: string) => {
      dispatch(consoleInput(letter))
    }, 60);

    // Wait a second before adding the input command
    inputQueue.add(() => delay(200));

    // Register event with Google Analytics
    ga.event({category: 'Program', action: 'Click Submit', label: input});

    // Submit the input command
    inputQueue.add(() => dispatch(consoleSubmit()));
  }
}

/**
 * @returns {Function}
 * @param lines
 */
export function consoleOutputMultiple(lines: ConsoleOutput[]): (dispatch: Dispatch) => void {
  return dispatch => {

    // Clear any user input
    dispatch(inputClear());

    // Add lines to the queue for typing
    queueLines(lines, inputQueue, (line: ConsoleOutput) => {
      dispatch(consoleOutput(line))
    }, 200);

    // Wait a second before adding the input command
    inputQueue.add(() => delay(200));

    // Submit the input command
    // inputQueue.add(() => dispatch(consoleSubmit()));
  }
}
