import React, { useEffect, useMemo, useState } from "react";
import TripDisplay from "./TripDisplay";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
import { setSearch, addSavedTrips, deleteSavedTrips } from "../redux/actions";

const Search = ({
  addSavedTrips,
  deleteSavedTrips,
  savedTrips,
  username,
  setSearch,
  search,
}) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const cityId = useMemo(() => {
    return savedTrips.map((city) => city.id);
  }, [savedTrips]);

  useEffect(() => {
    if (data) {
      setSearch(data);
    }
  }, [data]);

  return (
    <div>
      <h2 className="text-center">Where do you want to go {username} ?</h2>
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
          className="btn"
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
          <TripDisplay
            addSavedTrips={addSavedTrips}
            deleteSavedTrips={deleteSavedTrips}
            weatherMain={search.weather[0].main}
            city={search.weather[0].id}
            weatherDescription={search.weather[0].description}
            mainTemp={search.main.temp}
          />
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
  deleteSavedTrips,
  addSavedTrips,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
