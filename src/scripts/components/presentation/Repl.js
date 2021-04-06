import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ConsoleLine from './ConsoleLine';
import * as equal from 'fast-deep-equal';

class Repl extends Component {
    constructor(props) {
        super(props);
        this.frameRef = React.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
        this.props.startBlink(this.props.blinkRate);
    }

    handleKeyPress(e) {
        if(this.props.consoleState === 'ready') {
            this.props.keyPress(e, this.props.userInput);
        } else if(this.props.consoleState === 'pre-boot') {
            this.props.bootKeyPress(e, this.props.userInput);
        }
    }

    scrollToBottom() {
        this.frameRef.current.scrollTop = this.frameRef.current.scrollHeight;
    }

    componentDidUpdate(prevProps) {
        if (!equal(
            {console: prevProps.console, userInput: prevProps.userInput},
            {console: this.props.console, userInput: this.props.userInput}
        )) {
            this.scrollToBottom();
        }
    }

    render() {
        const {initialText, cursorVisible, userInput, console, prompt, consoleVisible, consoleState, bootText} = this.props;
        return (

            <div className={classnames('frame__square', {
                'frame__square--active' : consoleVisible,
                'frame__square--booting' : (consoleState === 'booting' || consoleState === 'pre-boot')
            })}
                 ref={this.frameRef}
            >
                <div className="repl-console">
                <pre>
                <span className="repl-console__text">
                    {consoleState === 'ready' && (
                        <span>{initialText}<br/></span>
                    )}
                    {consoleState === 'pre-boot' && (
                        <span>{bootText}<br/></span>
                    )}
                    {console.map((line, index) => <ConsoleLine key={index} prompt={prompt} {...line} />)}
                    {consoleState !== 'booting' && (
                        <span>{prompt + ' ' + userInput}
                            <span className="cursor"
                                style={{opacity: cursorVisible ? '1' : '0'}}
                            >_</span>
                        </span>
                    )}
                </span>
                </pre>
                </div>
            </div>
        );
    }
}

Repl.propTypes = {
    keyPress: PropTypes.func,
    initialText: PropTypes.string,
    blinkRate: PropTypes.number,
    handleEnter: PropTypes.func,
    consoleState: PropTypes.string,
};

Repl.defaultProps = {
    initialText: 'brandon chang',
    blinkRate: 1000
};

export default Repl;
