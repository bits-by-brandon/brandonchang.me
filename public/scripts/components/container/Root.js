"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const react_redux_1 = require("react-redux");
const App_1 = require("../container/App");
const Root = ({ store }) => (react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(App_1.default, null)));
Root.propTypes = {
    store: prop_types_1.default.object.isRequired
};
exports.default = Root;
//# sourceMappingURL=Root.js.map