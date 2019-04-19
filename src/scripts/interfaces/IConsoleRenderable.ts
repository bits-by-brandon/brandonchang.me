import {Output} from "../types/Output";

export default interface IConsoleRenderable {
  getOutput(): Output[] | Output
}