import {AnyAction} from "redux";

export default interface IInputObserver {
  subscribe(subscription: Subscription): () => void
  event(event: Event, input: string): void;
}

export interface Subscription {
  (action: AnyAction): void;
}

export interface Unsubscription {
  (subscription: Subscription): void;
}
