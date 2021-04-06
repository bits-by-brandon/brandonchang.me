import {useMemo} from "react";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export function useStore(initialState) {
  return useMemo(() => configureStore(initialState), [initialState])
}

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
);

export default configureStore
