import React from "react";
import TripDisplay from "./TripDisplay";

const SavedTrips = ({ tripDisplay, deleteSavedTrips, loggedInUser }) => {
  return (
    <>
      <h2 className="text-center"> Saved Trips for {loggedInUser}</h2>
      <div className="flex-wrap">
        {SavedTrips.map((id) => (
          <TripDisplay
            id={id}
            isSavedTrips={true}
            deleteSavedTrips={deleteSavedTrips}
            // weatherMain={weather.main}
            // weatherDescription={weather.description}
            // weatherIcon={weather.icon}
            // mainTemp={main.temp}
          />
        ))}
      </div>
    </>
  );
};

export default SavedTrips;
