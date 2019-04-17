"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@babel/polyfill");
require("react-hot-loader/patch");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const Root_1 = require("./scripts/components/container/Root");
const react_hot_loader_1 = require("react-hot-loader");
exports.store = configureStore();
const render = Component => {
    react_dom_1.default.render(react_1.default.createElement(react_hot_loader_1.AppContainer, null,
        react_1.default.createElement(Component, { store: exports.store })), document.getElementById('main'));
};
render(Root_1.default);
if (module.hot) {
    module.hot.accept('./scripts/components/container/Root', () => {
        render(Root_1.default);
    });
}
//# sourceMappingURL=entry.js.map