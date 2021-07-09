import React from "react";
import TripDisplay from "./TripDisplay";

const SavedTrips = ({ tripDisplay, deleteSavedTrips, loggedInUser }) => {
  return (
    <>
      <h2 className="text-center"> Saved Trips for {loggedInUser}</h2>
      <div className="flex-wrap">
        {savedTrips.map((name) => (
          <TripDisplay
            id={name.id}
            isSavedTrip={true}
            deleteSavedTrips={deleteSavedTrips}
            name={name}
            time={time}
            type={type}
            temperature={temperture}
            temperatureMin={temperatureMin}
            temperatureMax={temperatureMax}
            rain={rain}
            snow={snow}
            latitude={latitude}
            longitude={longitude}
            country={country}
          />
        ))}
      </div>
    </>
  );
};

export default SavedTrips;
