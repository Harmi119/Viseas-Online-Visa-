import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">
            Viseas
          </Link>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/countries" className="nav-link">Countries</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mt-12">
        <div className="text-center mb-12">
          <h1 className="heading-primary mb-6">About Viseas 🌟</h1>
          <p className="subheading">
            Your reliable partner for global visa and immigration solutions. We make your international dreams a reality.
          </p>
        </div>

        <div className="about-card mb-12">
          <div className="about-grid lg-about-grid-cols-2">
            <div>
              <h2 className="heading-secondary mb-6">Our Mission & Vision</h2>
              <p className="text-content mb-6">
                At Viseas, our mission is to simplify complex visa and immigration processes, providing clear, efficient, and trustworthy services to individuals and businesses worldwide. We envision a world where global mobility is seamless, empowering people to explore new opportunities and connect across borders without hassle.
              </p>
              <ul className="about-list">
                <li className="about-list-item"><strong>Client-Centric Approach:</strong> Your success is our priority.</li>
                <li className="about-list-item"><strong>Expert Guidance:</strong> Navigate regulations with confidence.</li>
                <li className="about-list-item"><strong>Transparency:</strong> Clear communication at every step.</li>
                <li className="about-list-item"><strong>Global Reach:</strong> Services for over 70 countries.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?semt=ais_hybrid&w=740"
                alt="Viseas Team"
                className="about-image"
              />
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="heading-secondary mb-6" style={{color: 'white'}}>Why Choose Us?</h2>
          <div className="cta-grid md-cta-grid-cols-3">
            <div className="cta-item">
              <div className="cta-icon">🏆</div>
              <h3 className="cta-title">Proven Success</h3>
              <p className="cta-desc">Over 15,000 successful applications with a 99% approval rate.</p>
            </div>
            <div className="cta-item">
              <div className="cta-icon">🤝</div>
              <h3 className="cta-title">Dedicated Support</h3>
              <p className="cta-desc">Personalized assistance from experienced visa consultants.</p>
            </div>
            <div className="cta-item">
              <div className="cta-icon">⚡</div>
              <h3 className="cta-title">Fast & Efficient</h3>
              <p className="cta-desc">Streamlined processes for quicker application handling.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="heading-secondary mb-6">Ready to start your journey?</h2>
          <Link
            to="/"
            className="cta-link-button"
          >
            Get Your Visa Today!
          </Link>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          &copy; 2025 Viseas. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;