"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Repl_1 = require("../container/Repl");
require("Styles/components/frame.scss");
class Frame extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", { className: "frame" },
            react_1.default.createElement(Repl_1.default, null)));
    }
}
exports.default = Frame;
//# sourceMappingURL=Frame.js.map