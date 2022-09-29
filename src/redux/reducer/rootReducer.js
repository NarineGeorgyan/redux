import { combineReducers } from "redux";
import { createUser } from "./getUser";
import { createUserByID } from "./getUser";

export const rootReducer = combineReducers({
  getUser: createUser,
  getUserId: createUserByID,
});
