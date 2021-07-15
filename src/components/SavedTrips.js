import React from "react";
import TripDisplay from "./TripDisplay";

const SavedTrips = ({ tripDisplay, deleteSavedTrips, loggedInUser }) => {
  return (
    <>
      <h2 className="text-center"> Saved Trips for {loggedInUser}</h2>
      <div className="flex-wrap">
        {SavedTrips.map((city) => (
          <TripDisplay
            city={search.weather[0].id}
            isSavedTrips={true}
            deleteSavedTrips={deleteSavedTrips}
            weatherMain={search.weather[0].main}
            weatherDescription={search.weather[0].description}
            // weatherIcon={weather.icon}
            mainTemp={search.main.temp}
          />
        ))}
      </div>
    </>
  );
};

export default SavedTrips;
