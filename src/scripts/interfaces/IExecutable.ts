import {Dispatch} from "redux";
import {Subscription} from "./IObservable";

export default interface IExecutable {
  run(args: string[], dispatch: Dispatch): Subscription | void
  terminate(): void
}