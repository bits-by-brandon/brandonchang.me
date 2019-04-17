import {Output} from "../../types/Output";

export interface ConsoleState {
  blinkRate: number,
  bootText: string,
  console: Output[],
  consoleVisible: boolean,
  consoleState: string,
  cursorInterval?: number,
  cursorVisible: boolean,
  hideCursor: boolean,
  initialText: string,
  inputHistory: string[],
  inputHistoryIndex: number,
  prompt: string,
  tabSpace: number,
  userInput: string,
}

// export interface Context {
//   output: ConsoleOutput[],
//   input: string
// }
