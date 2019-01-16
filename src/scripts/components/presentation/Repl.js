import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/repl.scss';
import ConsoleLine from './ConsoleLine';
import * as equal from 'fast-deep-equal';

class Repl extends Component {
    constructor(props) {
        super(props);
        this.frameRef = React.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.props.keyPress, false);
        this.props.startBlink(this.props.blinkRate);
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
        const {initialText, cursorVisible, userInput, console, prompt} = this.props;
        return (
            <div className={"frame__square" + (this.props.consoleVisible ? ' frame__square--active' : '')}
                 ref={this.frameRef}
            >
                <div className="repl-console">
                <pre>
                <h1 className="repl-console__text">
                    {initialText}<br/>
                    {console.map((line, index) => <ConsoleLine key={index} prompt={prompt} {...line} />)}
                    {prompt + ' ' + userInput}
                    <span
                        className="cursor"
                        style={{opacity: cursorVisible ? '1' : '0'}}
                    >_</span>
                </h1>
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
    handleEnter: PropTypes.func
};
Repl.defaultProps = {
    initialText: 'brandon chang',
    blinkRate: 1000
};

export default Repl;