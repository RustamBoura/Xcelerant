import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users', formData);
      console.log('User logged in:', response.data);
      // Optionally, you can store the user token in localStorage or a cookie for future authenticated requests
      // Or redirect the user to a private dashboard after successful login
    } catch (error) {
      console.error('Error logging in:', error.response.data.error);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
