// Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    // Assume you have a server endpoint to fetch user information based on the session or token
    const fetchUserInfo = async () => {
      try {
       
        const response = await axios.get('http://localhost:3001/userinfo', { withCredentials: true });
        
        if (response.data.success) {
            
          setUserName(response.data.name);
        } else {
          console.error('Error fetching user information:', response.data.message);
        }
      } catch (error) {
        console.error('Error during fetchUserInfo:', error.message);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = ()=>{
    axios.get('http://localhost:3001/logout');
    navigate('/login');
  }

  const userId = document.cookie

console.log(`User ID from Cookie: ${userId}`);

  return (
    <div>
      <h1>Welcome to the Dashboard, {userName}!</h1>
      {/* Other dashboard content goes here */}
      <button onClick={() => handleLogout()}>logout</button>

    </div>
  );
};

export default Dashboard;
