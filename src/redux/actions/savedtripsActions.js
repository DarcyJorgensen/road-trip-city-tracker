const ADD_SAVEDTRIPS = "Saved Trips";
export const DELETE_SAVEDTRIPS = "Delete Saved Trips";
export const CLEAR_SAVEDTRIPS = "Clear Saved Trips";

export function addSavedTrips(city) {
  return { type: ADD_SAVEDTRIPS, city };
}

export function deleteSavedTrips(city) {
  return { type: DELETE_SAVEDTRIPS, city };
}

export function clearSavedTrips() {
  return { type: CLEAR_SAVEDTRIPS };
}
