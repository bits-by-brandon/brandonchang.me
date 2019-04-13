"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const MenuItem_1 = require("../presentation/MenuItem");
const console_1 = require("../../actions/console");
const mapStateToProps = (state, ownProps) => ({
    input: ownProps.input
});
const mapDispatchToProps = dispatch => ({
    onClick: command => dispatch(console_1.consoleInputCommand(command)),
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MenuItem_1.default);
//# sourceMappingURL=MenuItem.js.map