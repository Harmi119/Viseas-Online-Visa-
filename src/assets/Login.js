// src/components/Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../assets/css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire('Error', 'Please fill in all fields', 'error');
      return;
    }

    axios.post('http://localhost:2828/api/verify', { email, password })
      .then((response) => {
        if (response.data.success) {
          Swal.fire('Login Successful!', '', 'success');
          
          const userData = {
            email: email,
            name: response.data.name || 'User'  // optional
          };
          localStorage.setItem("user", JSON.stringify(userData));
          setIsLoggedIn(true);
          // Optional: Redirect after delay
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          Swal.fire('Invalid Credentials', '', 'error');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        Swal.fire('Error', 'Something went wrong!', 'error');
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setEmail('');
    setPassword('');
    setIsLoggedIn(false);
    Swal.fire('Logged Out', 'You have been logged out.', 'success').then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        </form>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="btn btn-danger w-100 mt-3"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
