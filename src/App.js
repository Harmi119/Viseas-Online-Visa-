import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Countries from './Components/Countries';
import Services from './pages/Services';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './assets/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgorPassword';
import AddService from './Components/AddServices';
import ServicesList from './Components/ServicesList';
import Bookings from './Components/Bookings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
       <Route path="/add-service" element={<AddService />} />
        <Route path="/services-list" element={<ServicesList />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;