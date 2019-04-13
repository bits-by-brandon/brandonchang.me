"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
require("Styles/components/repl.scss");
class ConsoleLine extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { style, output, prompt } = this.props;
        const classes = ['line', ...style];
        return (react_1.default.createElement("span", { className: classes.join(' ') },
            (style.includes('input')) ? prompt + ' ' : '',
            react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: output } })));
    }
}
ConsoleLine.propTypes = {
    style: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired,
    output: prop_types_1.default.string,
    prompt: prop_types_1.default.string.isRequired
};
exports.default = ConsoleLine;
//# sourceMappingURL=ConsoleLine.js.map