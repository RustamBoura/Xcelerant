import React, { useState } from 'react';
import axios from 'axios';

const WelcomeUser = () => {
  const [user, setUser] = useState(null);

  // Function to get the user's data and store it in 'user' state
  const getUserData = async () => {
    try {
      const response = await axios.get('/api/users/me');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error.response.data.error);
    }
  };

  // Call the getUserData function when the component mounts (if the user is logged in)
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {user ? <h2>Welcome, {user.username}!</h2> : <h2>Please sign in or sign up.</h2>}
    </div>
  );
};

export default WelcomeUser;
