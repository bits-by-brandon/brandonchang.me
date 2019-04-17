"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = require("prop-types");
const react_1 = require("react");
const classnames_1 = require("classnames");
require("Styles/components/menu.scss");
const MenuItem_1 = require("../container/MenuItem");
const Menu = ({ consoleState, menuItems, currentCommand }) => {
    return (react_1.default.createElement("ul", { className: classnames_1.default("menu", consoleState) }, menuItems.map((menuItem, index) => react_1.default.createElement(MenuItem_1.default, { key: index, input: menuItem.slug, label: menuItem.label, active: currentCommand === menuItem.label }))));
};
Menu.propTypes = {
    consoleState: prop_types_1.default.string,
    menuItems: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        label: prop_types_1.default.string.isRequired,
        slug: prop_types_1.default.string.isRequired,
    }))
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map