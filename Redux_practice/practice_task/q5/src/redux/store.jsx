import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Named import
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
