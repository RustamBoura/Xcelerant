import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [signupFormData, setSignupFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false); // State to track successful signup

  const handleSignupFormChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/users', signupFormData)
      .then((response) => {
        console.log('User created:', response.data);
        setIsSignUpSuccess(true); // Set the state to indicate successful signup
      })
      .catch((error) => {
        console.error('Error creating user:', error.response.data.error);
        // Handle specific errors or show an error message to the user
      });
  };

  return (
    <div className="container">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupFormSubmit}>
          {/* Your form fields */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={handleSignupFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={handleSignupFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handleSignupFormChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
