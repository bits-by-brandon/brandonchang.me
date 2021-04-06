import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export function useStore(initialState?: object) {
  return useMemo(() => configureStore(initialState), [initialState]);
}

export default function configureStore(preloadedState?: object) {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}
