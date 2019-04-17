"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = require("prop-types");
const react_1 = require("react");
require("Styles/components/work-item.scss");
class workItem extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", { className: "work-item" },
            react_1.default.createElement("div", { className: "work-item__background-image__wrapper" },
                react_1.default.createElement("div", { className: "work-item__background-image", "data-clip": true, style: {
                        backgroundImage: 'url(' + this.props.imageUrl + ')'
                    } })),
            react_1.default.createElement("div", { className: "work-item__info" },
                react_1.default.createElement("div", { className: "work-item__text-wrapper" },
                    react_1.default.createElement("h2", { className: "work-item__header" }, this.props.header),
                    react_1.default.createElement("h5", { className: "work-item__subheader" }, this.props.subheader)),
                react_1.default.createElement("img", { src: this.props.iconUrl }))));
    }
}
workItem.propTypes = {
    header: prop_types_1.default.string.isRequired,
    subheader: prop_types_1.default.string.isRequired,
    imageUrl: prop_types_1.default.string.isRequired,
    iconUrl: prop_types_1.default.string.isRequired
};
workItem.defaultProps = {
    header: 'Header',
    subheader: 'Sub-Header',
    imageUrl: '/yo',
    iconUrl: '/yo'
};
exports.default = workItem;
//# sourceMappingURL=WorkItem.js.map