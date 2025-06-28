import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const respose = await axios.get(url);
        setData(respose.data)
        setError(null)
      }
      catch (err) {
        setError('Error fetching data');
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [url]);


  return { data, loading, error };
};

export default useFetch;