import React from "react";
import TripDisplay from "./TripDisplay";

const SavedTrips = ({ tripDisplay, deleteSavedTrips, loggedInUser }) => {
  return (
    <>
      <h2 className="text-center"> Saved Trips for {loggedInUser}</h2>
      <div className="flex-wrap">
        {savedTrips.map((city) => (
          <TripDisplay
            city={weather.id}
            isSavedTrips={true}
            deleteSavedTrips={deleteSavedTrips}
            weatherMain={weather.main}
            weatherDescription={weather.description}
            // weatherIcon={weather.icon}
            mainTemp={main.temp}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = () => {
  return {
    savedTrips: state.savedTrips,
  };
};

const mapDispatchToProps = {
  deleteSavedTrips,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedTrips);
