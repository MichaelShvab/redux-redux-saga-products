import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import { watchFetchProducts } from "../sagas/saga";

export const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(watchFetchProducts);

export default store;
