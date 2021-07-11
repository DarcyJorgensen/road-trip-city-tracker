const initialSavedTripsState = [];

export default function savedTripsReducer(
  state = initialSavedTripsState,
  action
) {
  switch (action.type) {
    case "Add Saved Trip":
      return [...state, action.city];
    case "Delete Saved Trip":
      return state.filter((city) => city.id !== action.id);
    case "Clear Saved Trip":
      return [];
    default:
      return state;
  }
}
