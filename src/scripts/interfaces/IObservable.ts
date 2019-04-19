export default interface IObservable {
  subscribe(subscription: Subscription): Unsubscription
  notify(updateData: any): void
}

export interface Subscription {
  (updateData: any): void;
}

export interface Unsubscription {
  (): void;
}
