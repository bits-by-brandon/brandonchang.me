import {store} from "../../entry";
import ProgramManager from "./ProgramManager";
import {InputObserverHelper} from "./InputObserverHelper";

// Program imports
import changePrompt from "../programs/changePrompt";
import exit from "../programs/exit";
import skills from "../programs/skills"
import hello from "../programs/hello";
import help from "../programs/help";
import echo from "../programs/echo";
import about from "../programs/about";
import contact from "../programs/contact";
import clear from "../programs/clear";
import work from "../programs/work";
import man from "../programs/man";

const inputObserver = InputObserverHelper.getInputObserver();

const programManager = new ProgramManager(inputObserver, store.dispatch, [
  exit, clear, about, skills, contact, work, changePrompt, echo, man, hello, help
]);

export default class ProgramManagerHelper {
  static getProgramManager() {
    return programManager;
  }
}