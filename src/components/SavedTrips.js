import React from "react";
import { deleteSavedTrips } from "../redux/actions";
import { connect } from "react-redux";
import TripDisplay from "./TripDisplay";

const SavedTrips = ({ savedTrips, deleteSavedTrips, username }) => {
  return (
    <>
      <h2 className="text-center"> Saved Trips for {username}.</h2>
      <h2 className="text-center"> </h2>
      <div className="flex-wrap">
        {savedTrips.map((city) => (
          <TripDisplay
            key={city.name}
            city={city.name}
            isSavedTrips={true}
            deleteSavedTrips={deleteSavedTrips}
            weatherMain={city.weatherMain}
            weatherDescription={city.weatherDescription}
            // weatherIcon={weather.icon}
            mainTemp={city.mainTemp}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    savedTrips: state.savedTrips,
  };
};

const mapDispatchToProps = {
  deleteSavedTrips,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedTrips);
