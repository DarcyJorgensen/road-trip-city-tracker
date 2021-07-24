import React, { useMemo } from "react";

function TripDisplay({
  isSavedTrips,
  city,
  addSavedTrips,
  deleteSavedTrips,
  weatherMain,
  weatherDescription,
  // weatherIcon,
  mainTemp,
}) {
  const convert = useMemo(() => {
    return ((mainTemp - 273.15) * 9) / 5 + 32;
  }, [mainTemp]);

  return (
    <div className="trip-container flex-column flex-wrap">
      <h4 className="text-center">City: {city}</h4>
      <h4 className="text-center">Main: {weatherMain}</h4>
      <h4 className="text-center">Main Temp: {convert}</h4>
      <h4 className="text-center">Description: {weatherDescription}</h4>
      <img className="trip" alt="on the road again" />
      {isSavedTrips && (
        <button
          className="button save-trip-button"
          onClick={() => deleteSavedTrips(city)}
        >
          Delete City
        </button>
      )}
      {!isSavedTrips && (
        <button
          className="button save-trip-button"
          onClick={() =>
            addSavedTrips({
              weatherMain,
              weatherDescription,
              mainTemp,
              name: city,
            })
          }
        >
          Add Saved City
        </button>
      )}
    </div>
  );
}

export default TripDisplay;
