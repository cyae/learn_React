import { useEffect, useState } from 'react';

// customised hook must starts with useXXX
const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // use abortController in case of quick route
    // that changes the state of component which don't exist in a new page
    const abortConst = new AbortController();

    fetch(url, { signal: abortConst.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false); // after data is fetched, change state of isPending to stop showing pending effect
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
