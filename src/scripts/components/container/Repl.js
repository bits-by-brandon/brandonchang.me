import React from 'react';
import {connect} from 'react-redux'
import {consoleRunCommand, actionCreators} from '../../actions/console';
import Repl from '../presentation/Repl';
import boot from '../../utility/boot';
import * as ga from 'react-ga';

const {consoleInput, consoleUp, consoleDown, consoleDelete, toggleHideCursor, consoleClose, consoleClear, inputClear} = actionCreators;

const cursorBlink = (blinkRate, dispatch) => setInterval(() => {
  dispatch(toggleHideCursor());
}, blinkRate);

const mapKeyToAction = (event, input, dispatch) => {
  let key = event.key.toLowerCase();

  if (event.ctrlKey) {
    switch (key) {
      case "c":
        dispatch(inputClear());
        return;
    }
  }

  if (event.metaKey) {
    // Exceptions for keyboard capture
    switch (key) {
      case "r":
      case "j":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        return;
    }
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
      dispatch(consoleClear());
      dispatch(consoleClose());
      break;

    case "arrowdown":
      event.preventDefault();
      return dispatch(consoleDown());

    case "arrowup":
      event.preventDefault();
      return dispatch(consoleUp());

    case "delete":
    case "backspace":
      event.preventDefault();
      return dispatch(consoleDelete());

    case "enter":
      event.preventDefault();
      // return dispatch(consoleRunCommand(input));

    default:
      event.preventDefault();
      return dispatch(consoleInput(key));
  }
};

const mapBootKeyToAction = (event, dispatch) => {
  if (event.key.toLowerCase() === 'enter') {

    // Register boot event in Google Analytics
    ga.pageview('/');

    dispatch(boot());
  }
};

const mapStateToProps = state => state.console;

const mapDispatchToProps = dispatch => ({
  bootKeyPress: event => mapBootKeyToAction(event, dispatch),
  keyPress: (event, input) => mapKeyToAction(event, input, dispatch),
  startBlink: blinkRate => cursorBlink(blinkRate, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Repl);