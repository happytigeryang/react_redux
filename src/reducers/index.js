import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";

import posts from "./postProducer";

export default combineReducers({
  posts,
  routerReducer
});
