import { ADD_SAVEDTRIP, DELETE_SAVEDTRIP, CLEAR_SAVEDTRIPS } from "../actions";

const initialSavedTripsState = [];

export default function savedTripReducer(
  state = initialSavedTripsState,
  action
) {
  switch (action.type) {
    case ADD_SAVEDTRIP:
      return [...state, action.name];
    case DELETE_SAVEDTRIP:
      return state.filter((name) => name.id !== action.id);
    case CLEAR_SAVEDTRIPS:
      return [];
    default:
      return state;
  }
}
