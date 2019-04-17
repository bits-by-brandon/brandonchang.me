"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = require("prop-types");
const react_1 = require("react");
const WorkItem_1 = require("./WorkItem");
require("Styles/sections/work-list.scss");
class workList extends react_1.Component {
    render() {
        return (react_1.default.createElement("ul", { className: "work-list" }, this.props.items.map((item, index) => {
            return (react_1.default.createElement(WorkItem_1.default, Object.assign({}, item, { key: index })));
        })));
    }
}
workList.propTypes = {
    items: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        header: prop_types_1.default.string.isRequired,
        subheader: prop_types_1.default.string.isRequired,
        imageUrl: prop_types_1.default.string.isRequired,
        iconUrl: prop_types_1.default.string.isRequired
    }))
};
workList.defaultProps = {};
exports.default = workList;
//# sourceMappingURL=WorkList.js.map