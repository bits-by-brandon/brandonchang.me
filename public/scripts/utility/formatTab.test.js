"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTab_1 = require("./formatTab");
it('tabs with correct spacing', () => {
    expect(formatTab_1.default(8, 'hello', 'world')).toEqual("hello   world");
    expect(formatTab_1.default(10, 'hello', 'world')).toEqual("hello     world");
});
//# sourceMappingURL=formatTab.test.js.map