import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";

import posts from "./postProducer";
import auth from "./authRducer";

export default combineReducers({
  posts,
  auth,
  routerReducer
});
