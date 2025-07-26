// src/components/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire('Error', 'Please enter your email', 'error');
      return;
    }

    axios.post('http://localhost:2828/api/forgot-password', { email })
      .then((res) => {
        if (res.data.success) {
          Swal.fire('Success', res.data.message, 'success');
        } else {
          Swal.fire('Warning', res.data.message, 'warning');
        }
      })
      .catch((err) => {
        console.error('Forgot password error:', err);
        Swal.fire('Error', 'Something went wrong!', 'error');
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="form-group">
            <label>Enter your registered Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
