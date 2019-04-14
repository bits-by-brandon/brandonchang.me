import {Dispatch} from "redux";
import IExecutable from "./IExecutable";

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

export default interface IProgram extends IExecutable {
  getHelpText(): any;

  getResponses(): any;

  getCommandName(): string;

  getAliases(): any;

  getCommandType(): any;
}

