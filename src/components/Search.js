import React, { useEffect, useMemo, useState} from "react";
import { connect} from "readct-redux";

const Search = ((
    addSavedTrip,
    deleteSavedTrip,
    savedTrip,
    username,
    setSearch,
    search,
)) => {
    const [searchField, setSearchField] = useState("");
    const [query, setQuery] = useState("");
    const {data, loading, error} = useFetch(query);
    const
}