import {OutputType} from "../models/ConsoleOutput";
import {
  ConsoleState,
  ConsoleAction,
  CONSOLE_CLEAR,
  CONSOLE_CLOSE,
  CONSOLE_DELETE,
  CONSOLE_DOWN,
  CONSOLE_INPUT,
  CONSOLE_SUBMIT,
  CONSOLE_OUTPUT,
  CONSOLE_UP,
  INPUT_CLEAR,
  TOGGLE_HIDE_CURSOR,
  CONSOLE_SET_PROMPT,
  CONSOLE_PRINT_LETTER,
  CONSOLE_SET_SCREEN,
  CONSOLE_SET_STATE,
  CONSOLE_SET_INITIAL_TEXT, CONSOLE_NEWLINE,
} from "@/store/console/types";

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

    case CONSOLE_UP: {
      window.console.log(state.inputHistory)
      if (state.inputHistory.length === 0) return state;

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

    case CONSOLE_DOWN: {
      window.console.log(state.inputHistory)
      if (state.inputHistoryIndex === 0) return state;
      const nextIndex = Math.max(state.inputHistoryIndex - 1, 1);
      return {
        ...state,
        inputHistoryIndex: nextIndex,
        userInput: state.inputHistory[state.inputHistory.length - nextIndex],
      };
    }

    case CONSOLE_DELETE:
      return {
        ...state,
        userInput: state.userInput.substring(0, state.userInput.length - 1),
      };

    case CONSOLE_INPUT:
      return {
        ...state,
        userInput: state.userInput + action.payload,
        hideCursor: false,
      };

    case CONSOLE_SUBMIT:
      // Return last state if there is no user input
      if (state.userInput.length === 0) return state

      return {
        ...state,
        userInput: '',
        inputHistoryIndex: 0,
        inputHistory: [...state.inputHistory, state.userInput],
        console: state.console.concat({style: [OutputType.INPUT], output: state.userInput}),
        consoleVisible: true
      };

    case CONSOLE_PRINT_LETTER:
      let newConsole = [...state.console];
      let newMessage = newConsole.pop();
      newMessage.output = newMessage.output + action.payload.letter;
      newConsole.concat(newMessage);
      return {...state, console: newConsole};

    case CONSOLE_SET_PROMPT:
      return {...state, prompt: action.payload};

    case CONSOLE_SET_INITIAL_TEXT:
      return {...state, initialText: action.payload};

    case CONSOLE_SET_STATE:
      return {...state, consoleState: action.payload};

    case CONSOLE_OUTPUT:
      return {...state, console: state.console.concat(action.payload)};

    case CONSOLE_NEWLINE:
      return {...state, console: state.console.concat({style: [OutputType.STANDARD], output: ' '})};

    case CONSOLE_SET_SCREEN:
      return {...state, console: action.payload};

    case CONSOLE_CLEAR:
      return {...state, userInput: '', console: []};

    case CONSOLE_CLOSE:
      return {...state, consoleVisible: false};

    case INPUT_CLEAR:
      return {...state, userInput: ''};

    case TOGGLE_HIDE_CURSOR:
      return {...state, cursorVisible: !state.cursorVisible};

    default:
      return state;
  }
};

