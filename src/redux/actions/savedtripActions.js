export const ADD_SAVEDTRIP = "Saved Trip";
export const DELETE_SAVEDTRIP = "Delete Saved Trip";
export const CLEAR_SAVEDTRIPS = "Clear Saved Trip";

export function addSavedTrip(name) {
  return { type: ADD_SAVEDTRIP, name };
}

export function deleteSavedTrip(name) {
  return { type: DELETE_SAVEDTRIP, name };
}

export function clearSavedTrips() {
  return { type: CLEAR_SAVEDTRIPS };
}
