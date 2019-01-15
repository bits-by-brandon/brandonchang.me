import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/repl.scss';
import ConsoleLine from "./ConsoleLine";

class Repl extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.props.keyPress, false);
        this.props.startBlink(this.props.blinkRate);
    }

    render() {
        const {initialText, cursorVisible, userInput, console, prompt} = this.props;
        return (
            <div className="repl-console">
                <pre>
                <h1 className="repl-console__text">
                    {initialText}<br/>
                    {console.map((line, index) => <ConsoleLine key={index} prompt={prompt} {...line} />)}
                    {prompt + ' ' + userInput}
                    <span
                        className="cursor"
                        style={{ opacity: cursorVisible ? '1' : '0' }}
                    >_</span>
                </h1>
                </pre>
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