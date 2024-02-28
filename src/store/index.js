import { compose, legacy_createStore } from "redux";
import appReducer from './ducks'
import middlewares from "./middlewares";

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const store = legacy_createStore(rootReducer, compose(...middlewares))

export default store