import { useState } from 'react';
import axios from 'axios';

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(url, data);
      setLoading(false);
      return res.data; // ✅ return response to caller
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setLoading(false);
      return null;
    }
  };

  return { postData, loading, error };
};

export default usePost;
