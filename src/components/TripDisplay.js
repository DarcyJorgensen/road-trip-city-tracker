import React, { useMemo } from "react";

function TripDisplay({
  isSavedTrips,
  addSavedTrips,
  deleteSavedTrips,
  weatherMain,
  weatherDescription,
  weatherIcon,
  mainTemp,
}) {
  const convert = useMemo(() => {
    return ((mainTemp - 273.15) * 9) / 5 + 32;
  });

  return (
    <div className="trip-container flex-column flex-wrap">
      <h4 className="text-center">Main: {weatherMain}</h4>
      <h4 className="text-center">Main Temp: {convert}</h4>
      <h4 className="text-center">Description: {weatherDescription}</h4>
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
