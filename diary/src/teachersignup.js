import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    name: '',
    username: '',
    password: '',
  });

  const [password1, setPassword1] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!teacherInfo.name || !teacherInfo.username || !teacherInfo.password || !password1) {
      document.getElementById('passwordnotmatch').innerText = 'All fields are required';
      return;
    }

    // Check if passwords match
    if (password1 === teacherInfo.password) {
      try {
        // Send a POST request to the server using Axios
        const response = await axios.post('http://127.0.0.1:3001/registerteachers', teacherInfo);

        // Handle the response from the server
        if (response.data.success) {
          // Display success message
          document.getElementById('passwordnotmatch').innerText = 'Successfully registered! Redirecting to login...';

          // Reset form fields
          setTeacherInfo({
            name: '',
            username: '',
            password: '',
          });
          setPassword1('');

          // Redirect to login after a delay
          setTimeout(() => {
            window.location.href = '/login';
          }, 2000);
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error submitting teacher information:', error.message);
        document.getElementById('passwordnotmatch').innerText = 'Registration failed. Please try again later.';
      }
    } else {
      document.getElementById('passwordnotmatch').innerText = 'Password does not match';
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Teacher Registration</h1>

        <div className="login__inputs">
          <div className="login__box">
            <input type="text" name="name" className="login__input" placeholder="Enter Your Name" value={teacherInfo.name} onChange={handleInputChange} />
            <i className="ri-user-fill"></i>
          </div>

          <br />
          <div className="login__box">
            <input type="text" name="username" className="login__input" placeholder='Enter Username' value={teacherInfo.username} onChange={handleInputChange} />
            <i className="ri-user-fill"></i>
          </div>

          <br />
          <div className="login__box">
            <input type="password" name="password" className="login__input" placeholder='Enter Password' value={teacherInfo.password} onChange={handleInputChange} />
            <i className="ri-user-fill"></i>
          </div>

          <br />
          <div className="login__box">
            <input type="password" name="password1" className="login__input" placeholder='Confirm Password' value={password1} onChange={(e) => setPassword1(e.target.value)} />
            <i className="ri-user-fill"></i>
          </div>
          <p id='passwordnotmatch'></p>
        </div>

        <br />
        <button type="submit" className="login__button">Register</button>
        <a href="/login" className="login__forgot">
          Have an account? Login
        </a>
      </form>
    </div>
  );
};

export default TeacherForm;
