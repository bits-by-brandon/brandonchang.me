import IInputObserver, {Subscription, Unsubscription} from "../interfaces/IInputObserver";
import {actionCreators} from "../actions/console";
import {AnyAction} from "redux";

const {consoleClose, consoleDelete, consoleDown, consoleInput, consoleSubmit, consoleUp, inputClear} = actionCreators;

export class InputObserver implements IInputObserver {
  private subscriptions: Map<Subscription, Unsubscription>;

  constructor() {
    this.subscriptions = new Map;
  }

  private emit(action: AnyAction) {
    this.subscriptions.forEach((unsubscription, subscription) => subscription(action));
  }

  /**
   * Accepts a function that will be called with an Action every time an event occurs
   */
  subscribe(subscription: Subscription) {
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
          this.emit(inputClear());
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
        this.emit(consoleClose());
        break;

      case "arrowdown":
        event.preventDefault();
        this.emit(consoleDown());
        break;

      case "arrowup":
        event.preventDefault();
        this.emit(consoleUp());
        break;

      case "delete":
      case "backspace":
        event.preventDefault();
        this.emit(consoleDelete());
        break;

      case "enter":
        event.preventDefault();
        this.emit(consoleSubmit());
        break;

      default:
        event.preventDefault();
        this.emit(consoleInput(key));
    }
  }
}

const inputObserver = new InputObserver();

export class InputObserverHelper {
  static getInputObserver() {
    return inputObserver;
  }
}

// Program callback
// let test = (args: string[], dispatch: Dispatch) => {
//   const io = InputObserverHelper.getInputObserver();
//
//   const handleInput: void = (action: ConsoleAction => {
//     console.log(action.type);
//   };
//
//   io.subscribe(handleInput);
// };
