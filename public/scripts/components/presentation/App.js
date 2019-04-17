"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const classnames_1 = require("classnames");
const ga = require("react-ga");
require("../background/entry");
require("Styles/components/canvas.scss");
require("Styles/app.scss");
const Menu_1 = require("../container/Menu");
const Repl_1 = require("../container/Repl");
ga.initialize('UA-62431523-1', { debug: process.env.NODE_ENV !== 'production', testMode: process.env.NODE_ENV !== 'production' });
ga.pageview('/boot');
class App extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default("main", this.props.consoleState) },
            react_1.default.createElement("div", { className: classnames_1.default("load-overlay", this.props.consoleState) }),
            react_1.default.createElement(Repl_1.default, null),
            react_1.default.createElement(Menu_1.default, { menuItems: [
                    { label: 'work', slug: 'work' },
                    { label: 'about', slug: 'about' },
                    { label: 'skills', slug: 'skills' },
                    { label: 'contact', slug: 'contact' },
                ] })));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map