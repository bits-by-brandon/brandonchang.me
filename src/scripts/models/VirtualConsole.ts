import IConsoleRenderable from "../interfaces/IConsoleRenderable";
import {Output} from "../types/Output";
import IObservable, {Subscription, Unsubscription} from "../interfaces/IObservable";

export default class VirtualConsole implements IConsoleRenderable, IObservable {
  private readonly output: Output[];
  private subscriptions: Map<Subscription, Unsubscription>;

  constructor(output?: Output[] | Output) {
    // automatically wrap output in array if passed without array
    if(Array.isArray(output)) {
      this.output = output;
    } else {
      this.output = [output];
    }
  }

  notify() {
    this.subscriptions.forEach((unsubscription, subscription) => subscription(this.output));
  }

  /**
   * Accepts a function that will be called with an Action every time an event occurs
   */
  subscribe(subscription: Subscription): Unsubscription {
    const unsubscribe = () => {
      this.subscriptions.delete(subscription);
    };

    this.subscriptions.set(subscription, unsubscribe);

    return unsubscribe;
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