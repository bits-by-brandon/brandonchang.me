import {Dispatch} from "redux";

export default interface IExecutable {
  run(args: string[], dispatch: Dispatch, store?: any): void;
}
