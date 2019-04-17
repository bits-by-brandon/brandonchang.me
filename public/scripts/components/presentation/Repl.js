"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const classnames_1 = require("classnames");
const prop_types_1 = require("prop-types");
require("Styles/components/repl.scss");
require("Styles/components/frame.scss");
const ConsoleLine_1 = require("./ConsoleLine");
const equal = require("fast-deep-equal");
class Repl extends react_1.Component {
    constructor(props) {
        super(props);
        this.frameRef = react_1.default.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
        this.props.startBlink(this.props.blinkRate);
    }
    handleKeyPress(e) {
        if (this.props.consoleState === 'ready') {
            this.props.keyPress(e, this.props.userInput);
        }
        else if (this.props.consoleState === 'pre-boot') {
            this.props.bootKeyPress(e, this.props.userInput);
        }
    }
    scrollToBottom() {
        this.frameRef.current.scrollTop = this.frameRef.current.scrollHeight;
    }
    componentDidUpdate(prevProps) {
        if (!equal({ console: prevProps.console, userInput: prevProps.userInput }, { console: this.props.console, userInput: this.props.userInput })) {
            this.scrollToBottom();
        }
    }
    render() {
        const { initialText, cursorVisible, userInput, console, prompt, consoleVisible, consoleState, bootText } = this.props;
        return (react_1.default.createElement("div", { className: classnames_1.default('frame__square', {
                'frame__square--active': consoleVisible,
                'frame__square--booting': (consoleState === 'booting' || consoleState === 'pre-boot')
            }), ref: this.frameRef },
            react_1.default.createElement("div", { className: "repl-console" },
                react_1.default.createElement("pre", null,
                    react_1.default.createElement("span", { className: "repl-console__text" },
                        consoleState === 'ready' && (react_1.default.createElement("span", null,
                            initialText,
                            react_1.default.createElement("br", null))),
                        consoleState === 'pre-boot' && (react_1.default.createElement("span", null,
                            bootText,
                            react_1.default.createElement("br", null))),
                        console.map((line, index) => react_1.default.createElement(ConsoleLine_1.default, Object.assign({ key: index, prompt: prompt }, line))),
                        consoleState !== 'booting' && (react_1.default.createElement("span", null,
                            prompt + ' ' + userInput,
                            react_1.default.createElement("span", { className: "cursor", style: { opacity: cursorVisible ? '1' : '0' } }, "_"))))))));
    }
}
Repl.propTypes = {
    keyPress: prop_types_1.default.func,
    initialText: prop_types_1.default.string,
    blinkRate: prop_types_1.default.number,
    handleEnter: prop_types_1.default.func,
    consoleState: prop_types_1.default.string,
};
Repl.defaultProps = {
    initialText: 'brandon chang',
    blinkRate: 1000
};
exports.default = Repl;
//# sourceMappingURL=Repl.js.map