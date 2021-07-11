import React from "react";

function TripDisplay({
  isSavedTrips,
  addSavedTrips,
  deleteSavedTrips,
  weatherMain,
  weatherDescription,
  weatherIcon,
  mainTemp,
}) {
  return (
    <div className="trip-container flex-column flex-wrap">
      <h4 className="text-center"> {}</h4>
      <img className="trip" alt="on the road again" />
      {isSavedTrips && (
        <button
          className="button save-trip-button"
          onClick={() => deleteSavedTrips()}
        >
          Delete Saved Trips
        </button>
      )}
      {!isSavedTrips && (
        <button
          className="button save-trip-button"
          onClick={() =>
            addSavedTrips({
              weatherMain,
              weatherDescription,
              weatherIcon,
              mainTemp,
              // city,
            })
          }
        >
          Add Saved Trips
        </button>
      )}
    </div>
  );
}

export default TripDisplay;
