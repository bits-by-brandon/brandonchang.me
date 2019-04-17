"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const classnames_1 = require("classnames");
const MenuItem = ({ input, label, active, onClick }) => (react_1.default.createElement("li", { className: classnames_1.default("menu__item", { active }) },
    react_1.default.createElement("button", { onClick: () => onClick(input) },
        active ? '=> ' : react_1.default.createElement("span", null, "\u00A0\u00A0\u00A0"),
        label)));
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map