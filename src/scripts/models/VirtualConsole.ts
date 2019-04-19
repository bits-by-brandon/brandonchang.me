import IConsoleRenderable from "../interfaces/IConsoleRenderable";
import {Output} from "../types/Output";
import IObservable from "../interfaces/IObservable";

export default class VirtualConsole implements IConsoleRenderable, IObservable {
  private readonly output: Output[];

  constructor(output?: Output[] | Output) {
    // automatically wrap output in array if passed without array
    if(Array.isArray(output)) {
      this.output = output;
    } else {
      this.output = [output];
    }
  }

  subscribe<T>(subscription: T): () => void {
  }

  addOutput(output: Output | Output[], index: number = this.output.length): void {
    if(Array.isArray(output)) {
      this.output.splice(index, 0, ...output);
    } else {
      this.output.splice(index, 0, output);
    }
  }

  getOutput(): Output[] | Output {
    return this.output;
  }
}