import { useState, useEffect } from "react";

const baseUrl =
  " https://api.troposphere.io/forecast/48.5,11.123?token=63c516e447ec873e12083ad7f3eac0183034ab73058835f9eb";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setData(null);
    if (url.length < 3) {
      setError("Search City must be at least 3 characters long.");
      return;
    }
    // fetch API
    async function callAPI() {
      setLoading(true);
      try {
        const response = await fetch(baseUrl + url);
        if ((response, ok)) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
        setError("Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    }
    callAPI();
  }, [url]);

  // Show any error; loading or not
  return { data, error, loading };
}
