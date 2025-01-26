import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const onSignUpClicked = () => {
    if (username.length === 0) {
      toast.warn('Please Enter Username');
    } else if (email.length === 0) {
      toast.warn('Please Enter Email');
    } else if (password.length === 0) {
      toast.warn('Please Enter Password');
    } else if (confirmPassword !== password) {
      toast.warn('Passwords do not match');
    } else {
      // Call your signup API here (you can use an API like `signup` or `register`)
      // Example: const response = await signup(username, email, password);
      navigate('/login'); // Redirect to login after successful signup
    }
  };

  return (
    <div className="signupFormHolder">
      <div className="glassEffect">
        <h2>Sign Up</h2>
        <div className="signupInputHolder">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <input
            type="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div style={{ margin: "2vh 0 0 0" }}>
          <p style={{ color: "#555" }}>
            Already have an account? <Link to='/login' style={{ color: "#007bff", textDecoration: "none" }}>Login</Link>
          </p>
        </div>
        <div className="signupButtonHolder">
          <button onClick={onSignUpClicked}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
