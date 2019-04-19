import {actionCreators, ConsoleAction} from "../actions/console";
import {AnyAction, Dispatch} from "redux";
import IObservable, {Subscription, Unsubscription} from "../interfaces/IObservable";

const {consoleClose, consoleDelete, consoleDown, consoleInput, consoleSubmit, consoleUp, inputClear} = actionCreators;

export class InputObserver<Action> implements IObservable {
  private subscriptions: Map<Subscription, Unsubscription>;

  constructor() {
    this.subscriptions = new Map;
  }

  notify(action: AnyAction) {
    this.subscriptions.forEach((unsubscription, subscription) => subscription(action));
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

  event(event: KeyboardEvent, input: string): void {
    let key = event.key.toLowerCase();

    if (event.ctrlKey) {
      switch (key) {
        case "c":
          this.notify(inputClear());
          return;
      }
    }

    if (event.metaKey && key.match(/\d|r|j/)) {
      return
    }

    switch (key) {
      case "alt":
      case "tab":
      case "meta":
      case "shift":
      case "control":
      case "capslock":
      case "arrowleft":
      case "arrowright":
      case "contextmenu":
        return;

      case "escape":
        event.preventDefault();
        this.notify(consoleClose());
        break;

      case "arrowdown":
        event.preventDefault();
        this.notify(consoleDown());
        break;

      case "arrowup":
        event.preventDefault();
        this.notify(consoleUp());
        break;

      case "delete":
      case "backspace":
        event.preventDefault();
        this.notify(consoleDelete());
        break;

      case "enter":
        event.preventDefault();
        this.notify(consoleSubmit());
        break;

      default:
        event.preventDefault();
        this.notify(consoleInput(key));
    }
  }
}

const inputObserver = new InputObserver();

export class InputObserverHelper {
  static getInputObserver() {
    return inputObserver;
  }
}

