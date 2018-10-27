import { combineReducers } from "redux";
import { getLogin } from "./login";
import { getProfile } from "./profile";


export const rootReducer  = combineReducers({
  login: getLogin,
  profile: getProfile
});
