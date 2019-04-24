import {AnyAction} from "redux";

export default interface IInteractive {
  sendInput(action: AnyAction): void
}