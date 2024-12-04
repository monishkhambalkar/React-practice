import { createStore, applyMiddleware } from "redux";
import { composeWithDevTool } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import thunk from "redux-thunk/es";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTool(applyMiddleware(thunk))
);

export default store;
