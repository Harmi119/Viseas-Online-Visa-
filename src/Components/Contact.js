import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
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
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/countries" className="nav-link">Countries</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mt-12">
        <div className="text-center mb-12">
          <h1 className="heading-primary mb-6">Get in Touch with Viseas 📞</h1>
          <p className="subheading">
            Have questions or ready to start your visa application? We're here to help!
          </p>
        </div>

        <div className="about-card mb-12">
          <div className="about-grid lg-about-grid-cols-2 gap-8"> {/* Added gap-8 for spacing */}
            <div>
              <h2 className="heading-secondary mb-6">Send Us a Message</h2>
              <form className="contact-form">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="john.doe@example.com" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-input" placeholder="Visa Inquiry" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea id="message" name="message" rows="5" className="form-input" placeholder="Tell us how we can help you..."></textarea>
                </div>
                <button type="submit" className="cta-link-button">Send Message</button>
              </form>
            </div>
            <div>
              <h2 className="heading-secondary mb-6">Our Contact Information</h2>
              <div className="text-content mb-6">
                <p className="mb-4">
                  <strong>Address:</strong> 123 Global Street, Visa City, VC 12345
                </p>
                <p className="mb-4">
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
                </p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:info@viseas.com" className="text-blue-600 hover:underline">info@viseas.com</a>
                </p>
                <p className="mb-4">
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (EST)
                </p>
              </div>
              <div className="map-placeholder">
                {/* You can embed a Google Map here using an iframe or a mapping library */}
                <img
                  src="https://via.placeholder.com/600x300/F3F4F6/9CA3AF?text=Map+Placeholder"
                  alt="Location Map"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="heading-secondary mb-6">Prefer to chat?</h2>
          <p className="subheading mb-6">
            Join our live chat support during business hours for immediate assistance.
          </p>
          {/* You might add a link to a live chat service here */}
          <Link
            to="#"
            onClick={(e) => { e.preventDefault(); alert('Live chat coming soon!'); }} // Placeholder for live chat
            className="cta-link-button"
          >
            Start Live Chat
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

export default Contact;