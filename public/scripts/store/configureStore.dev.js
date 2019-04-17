"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducers_1 = require("../reducers");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const configureStore = preloadedState => {
    const store = redux_1.createStore(reducers_1.default, preloadedState, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducers_1.default);
        });
    }
    return store;
};
exports.default = configureStore;
//# sourceMappingURL=configureStore.dev.js.map