"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("Styles/components/repl.scss");
const ConsoleOutput_1 = require("../../models/ConsoleOutput");
class ConsoleLine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { style, output, prompt } = this.props;
        const classes = ['line', ...style];
        return (React.createElement("span", { className: classes.join(' ') },
            (style.includes(ConsoleOutput_1.OutputType.INPUT)) ? prompt + ' ' : '',
            React.createElement("span", { dangerouslySetInnerHTML: { __html: output } })));
    }
}
exports.default = ConsoleLine;
//# sourceMappingURL=ConsoleLine.js.map