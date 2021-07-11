import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import savedtripsReducer from "./savedtripsReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  savedtrips: savedtripsReducer,
});

export default rootReducer;
