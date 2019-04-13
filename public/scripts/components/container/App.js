"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const App_1 = require("../presentation/App");
const mapStateToProps = state => ({
    consoleState: state.console.consoleState,
});
exports.default = react_redux_1.connect(mapStateToProps)(App_1.default);
//# sourceMappingURL=App.js.map