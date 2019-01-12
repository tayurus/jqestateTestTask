import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";

//reducers
import { cardReducer } from "./../components/card/reducer";

export const store = createStore(
  cardReducer,
  applyMiddleware(thunkMiddleware, logger)
);
