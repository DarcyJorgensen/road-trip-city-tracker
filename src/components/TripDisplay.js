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
    <div className="trip-container flex-column saved-trips-container">
      <form>
        <div>
          <h4 className="text-center">City: {city}</h4>
        </div>
        <br></br>
        <div>
          <h4 className="text-center">Main: {weatherMain}</h4>
        </div>
        <br></br>
        <div>
          <h4 className="text-center">Main Temp: {convert}</h4>
        </div>
        <br></br>
        <div>
          <h4 className="text-center">Description: {weatherDescription}</h4>
        </div>
      </form>

      {/* <img className="trip" alt="on the road again" /> */}
      {isSavedTrips && (
        <button
          className="button saved-trips-btn"
          onClick={() => deleteSavedTrips(city)}
        >
          Delete Saved City
        </button>
      )}
      {!isSavedTrips && (
        <button
          className="button saved-trips-btn"
          onClick={() =>
            addSavedTrips({
              weatherMain,
              weatherDescription,
              mainTemp,
              name: city,
            })
          }
        >
          Add City For My Trip
        </button>
      )}
    </div>
  );
}

export default TripDisplay;
