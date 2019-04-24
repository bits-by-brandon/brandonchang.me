import IExecutable from "./IExecutable";
import IInteractive from "./IInteractive";

export enum ProgramType {
  PRINT_OUTPUT,
  STREAM_CONSOLE,
  CLEAR_CONSOLE,
  EXIT_CONSOLE,
  INTERACTIVE,
  HELP,
}

export default interface IProgram extends IExecutable, IInteractive {
  getHelpText(): string;

  getResponses(): any;

  getCommandName(): string;

  getAliases(): any;

  getCommandType(): ProgramType;
}

