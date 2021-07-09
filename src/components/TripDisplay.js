import React from "react";

function TripDisplay({
  isSavedTrip,
  addSavedTrip,
  deleteSavedTrip,
  time,
  type,
  temperature,
  temperatureMin,
  temperatureMax,
  rain,
  snow,
  name,
  latitude,
  longitude,
  country,
}) {
  return (
    <div className="trip-container flex-column flex-wrap">
      <h4 className="text-center"> {name}</h4>
      <img className="trip" alt="on the road again" src={url} />
      {isSavedTrip && (
        <button
          className="btn save-trip-btn"
          onClick={() => deleteSavedTrip(name)}
        >
          Delete Saved Trip
        </button>
      )}
      {!isSavedTrip && (
        <button
          className="btn save-trip-btn"
          onClick={() =>
            addSavedTrip({
              time,
              type,
              temperature,
              temperatureMin,
              temperatureMax,
              rain,
              snow,
              name,
              latitude,
              longitude,
              country,
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
