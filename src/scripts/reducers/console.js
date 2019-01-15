import {
    CONSOLE_CLEAR,
    CONSOLE_CLOSE,
    CONSOLE_DELETE,
    CONSOLE_DOWN,
    CONSOLE_INPUT,
    CONSOLE_SUBMIT,
    CONSOLE_UP, TOGGLE_HIDE_CURSOR
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


        case CONSOLE_CLEAR:
            return {...state, userInput: '', console: []};

        case CONSOLE_CLOSE:
            return {...state, consoleVisible: false};

        case TOGGLE_HIDE_CURSOR:
            return {...state, cursorVisible: !state.cursorVisible};

        default:
            return state;
    }
};

