import {
  ADD_SAVEDTRIPS,
  DELETE_SAVEDTRIPS,
  CLEAR_SAVEDTRIPS,
} from "../actions";
const initialSavedTripsState = [];

export default function savedTripsReducer(
  state = initialSavedTripsState,
  action
) {
  switch (action.type) {
    case ADD_SAVEDTRIPS:
      return [...state, action.city];
    case DELETE_SAVEDTRIPS:
      return state.filter((city) => city.name !== action.name);
    case CLEAR_SAVEDTRIPS:
      return [];
    default:
      return state;
  }
}
