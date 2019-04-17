"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatTab(tabSpace, string1, string2) {
    let output = string1;
    for (let i = 0; i < tabSpace - string1.length; i++) {
        output += ' ';
    }
    return output + string2;
}
exports.default = formatTab;
//# sourceMappingURL=formatTab.js.map