// Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Button.css'


const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    // Assume you have a server endpoint to fetch user information based on the session or token
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3001/userinfo', { withCredentials: true });
        if (response.data.success) {
          setName(response.data.data[0].name)
          setUserName(response.data.data[0].username);
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

  console.log(userName)

  function gotopage(url) {
    window.location.href = url;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard, {name}!</h1>
      {/* Other dashboard content goes here */}
      <button className='logout_button' onClick={() => handleLogout()}>logout</button>
      <div className='button_body'>
        <button id='new-entry' className='dashbuttons' onClick={() => { gotopage(`/newform/${userName}`) }}>New Entry</button>
        <button id='old-entry' className='dashbuttons' onClick={() => { gotopage(`/oldentries/${userName}`) }}>Old Entry</button>
      </div>
    </div>
  );
};

export default Dashboard;
