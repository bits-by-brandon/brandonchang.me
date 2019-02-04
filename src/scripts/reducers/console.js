import {
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
    CONSOLE_SET_STATE
} from "../actions/console";

import applyConsoleCommand from './commands';

const defaultState = {
    inputHistory: [],
    inputHistoryIndex: 0,
    userInput: '',
    cursorVisible: false,
    cursorInterval: null,
    blinkRate: 1000,
    prompt: '>',
    console: [],
    consoleVisible: false,
    consoleState: 'booting',
    tabSpace: 8,
    initialText: 'brandon_chang',
};

export default function console(state = defaultState, action) {
    switch (action.type) {

        case CONSOLE_UP: {
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
            if (state.userInput.length === 0) {
                return state
            }

            return applyConsoleCommand(state);

        case CONSOLE_PRINT_LETTER:
            let newConsole = [...state.console];
            let newMessage = newConsole.pop();
            newMessage.output = newMessage.output + action.payload.letter;
            newConsole.concat(newMessage);
            console.log(action.payload.letter);
            return {...state, console: newConsole};

        case CONSOLE_SET_PROMPT:
            return {...state, prompt: action.payload};

        case CONSOLE_SET_STATE:
            return {...state, consoleState: action.payload};

        case CONSOLE_OUTPUT:
            return {...state, console: state.console.concat(action.payload)};

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

