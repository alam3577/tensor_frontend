import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;