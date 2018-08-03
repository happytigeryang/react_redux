import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  FETCH_POST
} from "../types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case `${ADD_POST}_FULFILLED`:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
    case FETCH_POST:
      return action.posts;
    case UPDATE_POST:
      state.forEach((item, i) => {
        if (item._id === action.payload._id) state[i] = action.payload;
      });
      return state;
    default:
      return state;
  }
}