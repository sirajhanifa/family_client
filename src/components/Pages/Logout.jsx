import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the login page when the component mounts (after logout)
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>You have logged out successfully!</h2>
    </div>
  );
};

export default Logout;
