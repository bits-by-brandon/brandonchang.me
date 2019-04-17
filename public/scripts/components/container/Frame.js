"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Frame_1 = require("../presentation/Frame");
const mapStateToProps = state => ({
    consoleVisible: state.console.consoleVisible,
});
exports.default = react_redux_1.connect(mapStateToProps)(Frame_1.default);
//# sourceMappingURL=Frame.js.map