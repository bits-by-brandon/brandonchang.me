import IProgram from "./IProgram";

export default interface IProgramManager {
  registerProgram(program: IProgram): void;

  findProgram(query: string): IProgram | null;

  getPrograms(): IProgram[];
}