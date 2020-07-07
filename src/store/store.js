import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { productosReducer } from "../reducer/productosReducer";
import {authReducer} from "../reducer/authReducer"

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  producto: productosReducer,
  auth: authReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
