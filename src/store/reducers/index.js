import { combineReducers } from "redux";

import User from "./user";
import Users from "./users";
import Questions from "./questions";
export const rootReducer = combineReducers({
  User,
  Users,
  Questions,
});
