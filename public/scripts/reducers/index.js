"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const console_1 = require("./console");
const rootReducer = redux_1.combineReducers({
    console: console_1.default,
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map