import {InputObserver} from "./InputObserver";

const inputObserver = new InputObserver();

export class InputObserverHelper {
  static getInputObserver(): InputObserver {
    return inputObserver;
  }
}

