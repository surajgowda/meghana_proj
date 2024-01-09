// src/components/LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        'http://localhost:3001/login',
        { username, password },
        { withCredentials: true }
        );


      if (response.data.success) {
        navigate(`/dashboard/${response.data.userId}`);
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__form">
        <h1 className="login__title">Teaching Diary</h1>
        <div className="login__inputs">
          <div className="login__box">
            <input
              type="text"
              placeholder="UserName"
              required
              className="login__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="ri-user-fill"></i>
          </div>
          <div className="login__box">
            <input
              type="password"
              placeholder="Password"
              required
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="ri-lock-2-fill"></i>
          </div>
        </div>
        <div className="login__check">
          <div className="login__check-box">
            <input
              type="checkbox"
              className="login__check-input"
              id="user-check"
            />
            <label htmlFor="user-check" className="login__check-label">
              Remember me
            </label>
          </div>
          <a href="#" className="login__forgot">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
        <a href="/register" className="login__forgot">
          Don't have an account? Register
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
