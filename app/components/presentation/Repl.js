//React Component: Logo
//============================

import React, {Component} from 'react';
import {breakLine} from '../../scripts/utils';
import {handleSubmit} from '../../scripts/replLogic';
import '../../styles/components/repl.scss';

class repl extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (key == "r" && e.metaKey) return;
        switch (key) {
            case "control":
            case "shift":
            case "capsLock":
            case "alt":
            case "meta":
            case "contextMenu":
            case "tab":
            case "arrowRight":
            case "arrowLeft":
            case "arrowUp":
            case "arrowDown":
                return;

            case "delete":
            case "backspace":
                e.preventDefault();
                this.setState((prevState) => {
                    return {
                        userInput: prevState.userInput.substring(0, prevState.userInput.length - 1)
                    }
                });
                break;

            case "enter":
                //The entered command matched a term
                e.preventDefault();
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
        return (
            <div className="repl-console">
                <pre>
                <h1 className="repl-console__text">
                    {breakLine(this.props.initialText)}
                    <span>
                        {this.state.console.map((line, index) => {
                            let classes = ['line', ...line.type];
                            return <span key={index} className={classes.join(' ')}>{line.payload}</span>
                        })}
                        {(this.state.userInput.length > 0 || this.state.console.length > 0)
                            ? '>'
                            : ''
                        }
                        {this.state.userInput}
                    </span>
                    <span
                        className="cursor"
                        style={{
                            opacity: this.state.hideCursor ? '0' : '1'
                        }}
                    >_</span>
                </h1>
                </pre>
            </div>
        );
    }
}

repl.propTypes = {
    initialText: React.PropTypes.string.isRequired,
    blinkRate: React.PropTypes.number,
    handleEnter: React.PropTypes.func
};
repl.defaultProps = {
    initialText: 'brandon chang',
    blinkRate: 1000
};

export default repl;