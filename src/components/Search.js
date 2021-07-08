import React, { useEffect, useMemo, useState } from "react";
import TripDisplay from "./TripDisplay";
import { connect } from "readct-redux";
import useFetch from "../hooks/useFetch";
import { setSearch, addSavedTrip, deleteSavedTrip } from "../redux/actions";

const Search = ({
  addSavedTrip,
  deleteSavedTrip,
  savedTrip,
  username,
  setSearch,
  search,
}) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const nameId = useMemo(() => {
    return savedTrip.map((val) => val.id);
  }, [savedTrip]);

  useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data]);

  return (
    <div>
      <h2 className="text-center">Where do you want to go?</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="search">Search City</label>
          <input
            id="search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </div>

        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            setQuery(searchField);
          }}
        >
          Search
        </button>
      </form>

      {loading && <div className="text-center"> Loading</div>}
      {error && <div className="text-center">{error}</div>}
      {search && (
        <div className="flex-wrap">
          {search.map((name) => (
            <TripDisplay
              addSavedTrip={addSavedTrip}
              deleteSavedTrip={deleteSavedTrip}
              time={time}
              type={type}
              temperature={temperature}
              temperatureMin={temperatureMin}
              temperatureMax={temperatureMax}
              rain={rain}
              snow={snow}
              name={name}
              latitude={latitude}
              longitude={longitude}
              country={country}
              key={name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
    search: state.search,
    savedTrips: state.savedTrips,
  };
}

const mapDispatchToProps = {
  deleteSavedTrip,
  addSavedTrip,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
