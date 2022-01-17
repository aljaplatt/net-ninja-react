import { useState, useEffect } from "react";

// state needs importing

const useFetch = (url) => {
  const [data, setData] = useState(null);
  /* State for fetch loading message */
  const [isPending, setIsPending] = useState(true);
  // store error in state
  const [error, setError] = useState(null);

  useEffect(() => {
    // timeout is simulating real fetch - do not use irl
    setTimeout(() => {
      // fetching the data when the component first renders- get request to localhost:8000
      async function fetchData(url) {
        const response = await fetch();
        // if the response is not ok - if this is true...throw error
        // this is then caught in the catch block.
        // this can help if our resquest is denied, endpoint doesnt exist
        // catch block not enough, response is sent, but no data/different status
        if (!response.ok) {
          throw Error("Data is unavailable");
        }
        // returns response object
        const fetchData = await response.json();
        // Now we update state with this data by passing fetchData in to setBlogs.
        setData(fetchData);
        // fetch is complete - remove isPending mess/change state
        setIsPending(false);
        // remove error message if the request is successful
        setError(null);
      }

      fetchData().catch((err) => {
        // will catch network errors - cannot connect to server
        // console.log(err.message); - now we can use setState
        // setIsPending false - will now not show loading message - it's unavailable
        setIsPending(false);
        setError(err.message);
      });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
