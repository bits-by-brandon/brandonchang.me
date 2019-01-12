//React Component: Logo
//============================

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {handleSubmit} from '../../scripts/repl';
import 'Styles/components/repl.scss';

class repl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHistory: [],
            inputHistoryIndex: 0,
            hideCursor: false,
            cursorInterval: null,
            userInput: '',
            console: [],
        };
        this.cursorBlink = this.cursorBlink.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);

        this.setState({
            cursorInterval: this.cursorBlink()
        })
    }

    cursorBlink() {
        return setInterval(
            function () {
                this.setState(
                    (prevState) => {
                        return {hideCursor: !prevState.hideCursor}
                    }
                )
            }.bind(this),
            this.props.blinkRate
        );
    }

    handleKeyPress(e) {
        let key = e.key.toLowerCase();
        if (key === "r" && e.metaKey) return;
        switch (key) {
            case "control":
            case "shift":
            case "capslock":
            case "alt":
            case "meta":
            case "contextmenu":
            case "tab":
            case "arrowright":
            case "arrowleft":
                return;

            case "arrowdown":
                e.preventDefault();
                this.setState(prevState => {
                    if(prevState.index === 0) { return; }
                    let indexCandidate = prevState.inputHistoryIndex - 1;
                    if(indexCandidate < 1) { indexCandidate = 1; }
                    return {
                        inputHistoryIndex: indexCandidate,
                        userInput: prevState.inputHistory[prevState.inputHistory.length - indexCandidate],
                    };
                });
                break;

            case "arrowup":
                e.preventDefault();
                this.setState(prevState => {
                    let indexCandidate = prevState.inputHistoryIndex + 1;
                    if(indexCandidate > prevState.inputHistory.length) {
                        indexCandidate = prevState.inputHistory.length;
                    }
                    return {
                        inputHistoryIndex: indexCandidate,
                        userInput: prevState.inputHistory[prevState.inputHistory.length - indexCandidate],
                    };
                });
                break;

            case "delete":
            case "backspace":
                e.preventDefault();
                this.setState(prevState => ( {
                    userInput: prevState.userInput.substring(0, prevState.userInput.length - 1)
                }));
                break;

            case "enter":
                //The entered command matched a term
                e.preventDefault();

                // Return if nothing is input
                if(this.state.userInput.length === 0) { return }

                let newState = handleSubmit(this.state);
                this.setState(newState);
                //Scrolls content to bottom and sends state of console
                this.props.handleEnter(newState.console.length > 0);
                break;

            default:
                e.preventDefault();
                clearInterval(this.state.cursorInterval);
                this.setState((prevState) => {
                    return {
                        userInput: prevState.userInput + key,
                        hideCursor: false,
                        cursorInterval: this.cursorBlink()
                    }
                })
        }
    }

    render() {
        const {console, userInput, hideCursor} = this.state;
        const {initialText} = this.props;
        return (
            <div className="repl-console">
                <pre>
                <h1 className="repl-console__text">
                    {initialText}<br/>
                    <span>
                        {console.map((line, index) => {
                            let classes = ['line', ...line.type];
                            return <span key={index} className={classes.join(' ')}>{line.payload}</span>
                        })}
                        {(userInput.length > 0 || console.length > 0)
                            ? '> '
                            : '> '
                        }
                        {userInput}
                    </span>
                    <span
                        className="cursor"
                        style={{
                            opacity: hideCursor ? '0' : '1'
                        }}
                    >_</span>
                </h1>
                </pre>
            </div>
        );
    }
}

repl.propTypes = {
    initialText: PropTypes.string,
    blinkRate: PropTypes.number,
    handleEnter: PropTypes.func
};
repl.defaultProps = {
    initialText: 'brandon chang',
    blinkRate: 1000
};

export default repl;