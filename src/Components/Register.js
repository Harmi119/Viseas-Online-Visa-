// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; // ✅ Import Link
 import '../assets/css/Login.css';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, mobile, password } = formData;

    if (!name || !email || !mobile || !password) {
      Swal.fire('Error', 'Please fill in all fields', 'error');
      return;
    }

    axios.post('http://localhost:2828/api/register', formData)
      .then((response) => {
        if (response.data.success) {
          Swal.fire('Registered Successfully!', '', 'success');
        } else {
          Swal.fire('Email already registered!', '', 'warning');
        }
      })
      .catch((error) => {
        console.error('Registration error:', error);
        Swal.fire('Error', 'Something went wrong!', 'error');
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
         <div className="form-group">
  <label>Mobile</label>
  <input 
    type="text"
    name="mobile"
    className="form-control"
    value={formData.mobile}
    onChange={handleChange}
    required
    maxLength="10" // prevents more than 10 digits
    pattern="\d{10}" // ensures exactly 10 digits
    title="Mobile number must be exactly 10 digits"
  />
</div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        {/* 👇 Login Link */}
        <div className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </div>
        <div className="text-center mt-2">
  <Link to="/forgot-password">Forgot your password?</Link>
</div>
      </div>
    </div>
  );
}

export default Register;