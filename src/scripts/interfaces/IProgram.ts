import {Dispatch} from "redux";

export interface ProgramCallback {
  (args: string[], dispatch: Dispatch): void;
}

export enum ProgramType {
  PRINT_OUTPUT,
  STREAM_CONSOLE,
  CLEAR_CONSOLE,
  EXIT_CONSOLE,
  HELP,
}

export default interface IProgram {
  getHelpText(): any;

  getResponses(): any;

  getCommandName(): string;

  getAliases(): any;

  getCommandType(): any;

  run(args: string[], dispatch: Dispatch): void;
}

