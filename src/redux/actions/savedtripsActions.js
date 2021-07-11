const ADD_SAVEDTRIP = "Saved Trips";
export const DELETE_SAVEDTRIP = "Delete Saved Trips";
export const CLEAR_SAVEDTRIPS = "Clear Saved Trips";

export function addSavedTrip(city) {
  return { type: ADD_SAVEDTRIP, city };
}

export function deleteSavedTrip(city) {
  return { type: DELETE_SAVEDTRIP, city };
}

export function clearSavedTrips() {
  return { type: CLEAR_SAVEDTRIPS };
}
