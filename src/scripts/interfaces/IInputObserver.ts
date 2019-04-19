import IObservable, {Subscription, Unsubscription} from "./IObservable";
import {AnyAction} from "redux";

export default interface IInputObserver extends IObservable{
  subscribe(subscription: Subscription<AnyAction>): Unsubscription
}

// export interface Subscription {
//   (action: AnyAction): void;
// }
//
