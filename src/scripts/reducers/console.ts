import {OutputType} from "../types/Output";
import {ConsoleState} from "../store/console/types";
import {ConsoleAction, ConsoleActionType} from "../actions/console";

const defaultState: ConsoleState = {
  inputHistory: [],
  inputHistoryIndex: 0,
  userInput: '',
  cursorVisible: false,
  cursorInterval: null,
  blinkRate: 1000,
  prompt: '>',
  console: [],
  consoleVisible: false,
  consoleState: 'pre-boot',
  initialText: '',
  hideCursor: false,
  tabSpace: 10,
  bootText: 'brandonchang.me Interactive Program Prompt (ICP)\nPress ENTER to boot',
};

export default function console(state = defaultState, action: ConsoleAction): ConsoleState {
  switch (action.type) {

    case ConsoleActionType.CONSOLE_UP: {
      const nextIndex = Math.min(
        state.inputHistoryIndex + 1,
        state.inputHistory.length
      );
      return {
        ...state,
        inputHistoryIndex: nextIndex,
        userInput: state.inputHistory[state.inputHistory.length - nextIndex],
      };
    }

    case ConsoleActionType.CONSOLE_DOWN: {
      if (state.inputHistoryIndex === 0) {
        return;
      }
      const nextIndex = Math.max(state.inputHistoryIndex - 1, 1);
      return {
        ...state,
        inputHistoryIndex: nextIndex,
        userInput: state.inputHistory[state.inputHistory.length - nextIndex],
      };
    }

    case ConsoleActionType.CONSOLE_DELETE:
      return {
        ...state,
        userInput: state.userInput.substring(0, state.userInput.length - 1),
      };

    case ConsoleActionType.CONSOLE_INPUT:
      return {
        ...state,
        userInput: state.userInput + action.payload,
        hideCursor: false,
      };

    case ConsoleActionType.CONSOLE_SUBMIT:
      // Return last state if there is no user input
      if (state.userInput.length === 0) {
        return state
      }

      return {
        ...state,
        userInput: '',
        console: state.console.concat({style: [OutputType.INPUT], output: state.userInput}),
        consoleVisible: true
      };

    case ConsoleActionType.CONSOLE_PRINT_LETTER:
      let newConsole = [...state.console];
      let newMessage = newConsole.pop();
      newMessage.output = newMessage.output + action.payload.letter;
      newConsole.concat(newMessage);
      return {...state, console: newConsole};

    case ConsoleActionType.CONSOLE_SET_PROMPT:
      return {...state, prompt: action.payload};

    case ConsoleActionType.CONSOLE_SET_INITIAL_TEXT:
      return {...state, initialText: action.payload};

    case ConsoleActionType.CONSOLE_SET_STATE:
      return {...state, consoleState: action.payload};

    case ConsoleActionType.CONSOLE_OUTPUT:
      return {...state, console: state.console.concat(action.payload)};

    case ConsoleActionType.CONSOLE_NEWLINE:
      return {...state, console: state.console.concat({style: [OutputType.STANDARD], output: ' '})};

    case ConsoleActionType.CONSOLE_SET_SCREEN:
      return {...state, console: action.payload};

    case ConsoleActionType.CONSOLE_CLEAR:
      return {...state, userInput: '', console: []};

    case ConsoleActionType.CONSOLE_CLOSE:
      return {...state, consoleVisible: false};

    case ConsoleActionType.INPUT_CLEAR:
      return {...state, userInput: ''};

    case ConsoleActionType.TOGGLE_HIDE_CURSOR:
      return {...state, cursorVisible: !state.cursorVisible};

    default:
      return state;
  }
};

