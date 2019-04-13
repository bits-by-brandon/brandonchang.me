import {programType} from "../../interfaces/IProgram";
import {ConsoleOutput, OutputType} from "../../models/ConsoleOutput";

export const CONSOLE_INPUT = 'CONSOLE_INPUT';
export const CONSOLE_UP = 'CONSOLE_UP';
export const CONSOLE_DOWN = 'CONSOLE_DOWN';
export const CONSOLE_DELETE = 'CONSOLE_DELETE';
export const CONSOLE_SUBMIT = 'CONSOLE_SUBMIT';
export const CONSOLE_CLEAR = 'CONSOLE_CLEAR';
export const CONSOLE_CLOSE = 'CONSOLE_CLOSE';
export const CONSOLE_OUTPUT = 'CONSOLE_OUTPUT';
export const CONSOLE_PRINT_LETTER = 'CONSOLE_PRINT_LETTER';
export const CONSOLE_NEWLINE = 'CONSOLE_NEWLINE';
export const CONSOLE_SET_SCREEN = 'CONSOLE_SET_SCREEN';
export const CONSOLE_SET_PROMPT = 'CONSOLE_SET_PROMPT';
export const CONSOLE_SET_INITIAL_TEXT = 'CONSOLE_SET_INITIAL_TEXT';
export const CONSOLE_SET_STATE = 'CONSOLE_SET_STATE';
export const CONSOLE_ADD_HISTORY = 'CONSOLE_ADD_HISTORY';
export const INPUT_CLEAR = 'INPUT_CLEAR';
export const TOGGLE_HIDE_CURSOR = 'TOGGLE_HIDE_CURSOR';

export interface ConsoleState {
  inputHistory: string[],
  inputHistoryIndex: number,
  userInput: string,
  cursorVisible: boolean,
  cursorInterval?: number,
  blinkRate: number,
  prompt: string,
  console: ConsoleOutput[],
  consoleVisible: boolean,
  consoleState: string,
  hideCursor: boolean,
  initialText: string,
  bootText: string,
}

interface PayloadAction {
  type: string,
  payload?: any
}

export type ConsoleAction = PayloadAction
