import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import savedTripsReducer from "./savedTripsReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  savedTrips: savedTripsReducer,
});

export default rootReducer;
