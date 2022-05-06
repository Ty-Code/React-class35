import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('HTTP Error!');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData(null);
        setIsError(error.message);
      }
      setIsLoading(false);
    }
    fetchData(url);
  }, [url]);

  return { data, isLoading, isError };
}

export default useFetch;
