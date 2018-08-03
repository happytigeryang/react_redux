import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";

import posts from "./postReducer";
import auth from "./authReducer";

export default combineReducers({
  posts,
  auth,
  routerReducer
});
