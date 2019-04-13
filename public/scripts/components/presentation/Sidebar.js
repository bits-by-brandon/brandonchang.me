"use strict";
//React Component: Sidebar
//============================
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = require("prop-types");
const react_1 = require("react");
require("Styles/components/sidebar.scss");
class sidebar extends react_1.Component {
    render() {
        return (react_1.default.createElement("ul", { className: "sidebar" }, this.props.listItems.map((text, index) => react_1.default.createElement("li", { key: index },
            react_1.default.createElement("h3", null, text)))));
    }
}
sidebar.propTypes = {
    listItems: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired
};
exports.default = sidebar;
//# sourceMappingURL=Sidebar.js.map