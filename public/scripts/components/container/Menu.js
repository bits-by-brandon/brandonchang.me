"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Menu_1 = require("../presentation/Menu");
const mapStateToProps = (state, ownProps) => ({
    consoleState: state.console.consoleState,
    menuItems: ownProps.menuItems,
    currentCommand: state.console.inputHistory[state.console.inputHistory.length - 1] || null,
});
exports.default = react_redux_1.connect(mapStateToProps)(Menu_1.default);
//# sourceMappingURL=Menu.js.map