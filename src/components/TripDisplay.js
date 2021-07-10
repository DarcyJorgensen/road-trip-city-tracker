import React from "react";

function TripDisplay({
  isSavedTrip,
  addSavedTrip,
  deleteSavedTrip,
  weatherMain,
  weatherDescription,
  weatherIcon,
  mainTemp,
}) {
  return (
    <div className="trip-container flex-column flex-wrap">
      <h4 className="text-center"> {}</h4>
      <img className="trip" alt="on the road again" />
      {isSavedTrip && (
        <button
          className="button save-trip-button"
          onClick={() => deleteSavedTrip()}
        >
          Delete Saved Trip
        </button>
      )}
      {!isSavedTrip && (
        <button
          className="button save-trip-button"
          onClick={() =>
            addSavedTrip({
              weatherMain,
              weatherDescription,
              weatherIcon,
              mainTemp,
              // city,
            })
          }
        >
          Add Saved Trip
        </button>
      )}
    </div>
  );
}

export default TripDisplay;
