import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import 'Styles/components/repl.scss';
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
        this.props.keyPress(e, this.props.userInput);
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
        const {initialText, cursorVisible, userInput, console, prompt, consoleVisible, consoleState} = this.props;
        return (

            <div className={classnames('frame__square', {
                'frame__square--active' : consoleVisible,
                'frame__square--booting' : consoleState === 'booting'
            })}
                 ref={this.frameRef}
            >
                <div className="repl-console">
                <pre>
                <span className="repl-console__text">
                    {consoleState !== 'booting' && (
                        <span>{initialText} <br/></span>
                    )}
                    {console.map((line, index) => <ConsoleLine key={index} prompt={prompt} {...line} />)}
                    {prompt + ' ' + userInput}
                    <span
                        className="cursor"
                        style={{opacity: cursorVisible ? '1' : '0'}}
                    >_</span>
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