import IProgram from "./IProgram";

export default interface IProgramManager {
  registerProgram(program: IProgram): void;

  findProgram(query: string): IProgram | null;

  runProgram(query: string): void | Error;

  getPrograms(): IProgram[];

  getActiveProgram(): IProgram | null;
}