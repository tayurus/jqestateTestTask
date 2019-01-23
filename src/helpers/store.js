import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from 'redux-saga';
import { logger } from "redux-logger";
import  rootSaga  from './../sagas';
//reducers
import { cardReducer } from "./../reducers";

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(cardReducer, applyMiddleware(sagaMiddleWare, logger));
sagaMiddleWare.run(rootSaga)
