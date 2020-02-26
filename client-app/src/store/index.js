import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import sagaMiddleware from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

