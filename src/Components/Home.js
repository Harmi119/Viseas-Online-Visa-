import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Home.css';

function Home() {
  const [services, setServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const sliderImages = [
    {
      img: 'https://th.bing.com/th/id/R.0101797396fbd34d27dccb0157b7172e?rik=d6sfieR79TWR7g&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1296317%2fimages%2fo-AIRPORT-PHONE-facebook.jpg&ehk=PtSO7WRCnDqDyqAtF%2fQoproMc1lw1ONizVCORxS7Uac%3d&risl=&pid=ImgRaw&r=0',
      title: 'Unlock Your Global Dreams',
      subtitle: 'Expert visa services and personalized guidance for a seamless international journey.',
    },
    {
      img: 'https://img.freepik.com/premium-photo/woman-student-smile-graduation-diploma-achievement-higher-education-portrait-happy-female-academic-learner-holding-certificate-qualification-degree-university-scholarship_590464-131002.jpg',
      title: 'Study Abroad with Confidence',
      subtitle: 'Achieve your academic goals with our comprehensive student visa support.',
    },
    {
      img: 'https://img.freepik.com/premium-photo/businessman-hands-shaking-hands-working-together-businessman-concept-support-office_1037297-49705.jpg',
      title: 'Business Ventures Worldwide',
      subtitle: 'Facilitating global business expansion through efficient visa solutions.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        (prevIndex + 1) % sliderImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex + 1) % sliderImages.length
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    Axios.get('http://localhost:2828/api/services')
      .then((res) => {
        if (res.data.success) {
          setServices(res.data.services);
        }
      })
      .catch((err) => console.log("Error fetching services", err));
  }, []);

  function bookdestination(id, day) {
    var merchant_order_id = "123";
    var options = {
      key: "rzp_test_60v2W0km5tB9fH",
      amount: day * 100,
      name: "Viseas Services",
      description: "Visa Application Fee",
      currency: "INR",
      netbanking: true,
      prefill: {
        name: "Keya",
        email: "keya23@gmail.com",
        contact: "9898989898",
      },
      notes: {
        service_id: id,
        soolegal_order_id: merchant_order_id,
      },
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      theme: {
        color: "#b3cbe9ff",
      },
    };

    if (window.Razorpay) {
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      alert("Razorpay SDK not loaded. Please try again later.");
      console.error("Razorpay SDK not found. Make sure it's loaded in index.html");
    }
  }

  const staticServices = [
    {
      img: 'https://media.istockphoto.com/id/938111282/photo/business-team.jpg?s=170667a&w=0&k=20&c=cggBNFmkz3yC1TVGNLgacE0Q__QRugthwLQ440rZjZ4=',
      title: 'Expert Guidance',
      desc: 'Professional visa consultation for all destinations',
    },
    {
      img: 'https://images.shiksha.ws/mediadata/images/articles/visa7.jpg',
      title: 'Fast Processing',
      desc: 'Quick processing with timely status updates',
    },
    {
      img: 'https://media.licdn.com/dms/image/v2/D4E12AQGaoRzmP8y98A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1687967980301?e=2147483647&v=beta&t=xsrlQAZ-E8tOOTrk4GBO1SrgdOVYtpQK8QDKltyE8aQ',
      title: 'Global Coverage',
      desc: 'Comprehensive services worldwide with local expertise',
    },
  ];

  const styles = {
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '2.5em',
      marginBottom: '10px',
    },
    sectionSubtitle: {
      fontSize: '1.1em',
    },
  };

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>Global Visa Services</span>
          <a href="tel:+911800VISEAS" className="top-bar-link">Call: +91 1800-VISEAS</a>
          <a href="mailto:info@viseas.com" className="top-bar-link">info@viseas.com</a>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">Viseas</a>
          <nav>
            <ul className="nav-list">
              <li className="nav-item"><a href="/" className="nav-link active">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="/countries" className="nav-link">Countries</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="/register" className="nav-link">Register</a></li>
              <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
              <li className="nav-item"><a href="/add-service" className="nav-link">Add_Services</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content container for sections below the main hero */}
      <div className="container mt-8">
        {/* Hero Section with Custom Slider */}
        <section className="custom-slider-section" style={{ position: 'relative', overflow: 'hidden', height: '400px', borderRadius: '8px' }}>
          {sliderImages.map((item, index) => (
            <div
              key={index}
              className="custom-slide-item"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                display: index === currentSlideIndex ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                transition: 'opacity 0.5s ease-in-out',
                opacity: index === currentSlideIndex ? 1 : 0,
              }}
            >
              <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(58, 124, 165, 0.6)' }}></div>
              <div className="hero-content" style={{ zIndex: 1, textAlign: 'center', color: '#fff', padding: '20px' }}>
                <h2 className="hero-title">{item.title}</h2>
                <p className="hero-subtitle">
                  {item.subtitle}
                </p>
                <a href="/services" className="hero-button">Explore Services</a>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &#10094;
          </button>
          <button
            onClick={goToNextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &#10095;
          </button>

          {/* Pagination Dots */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              width: '100%',
              textAlign: 'center',
              zIndex: 2,
            }}
          >
            {sliderImages.map((_, index) => (
              <span
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === currentSlideIndex ? '#5cb8e4' : 'rgba(255,255,255,0.7)',
                  margin: '0 5px',
                  cursor: 'pointer',
                }}
              ></span>
            ))}
          </div>
        </section>

        {/* Added margin-top to separate the sections */}
        <section className="section card mt-12 mb-12"> 
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, color: '#f8bab8f5'}}>Our Comprehensive Services</h2>
            <p style={{...styles.sectionSubtitle, color: '#cfe9f5ff'}}>We offer a wide range of services tailored to your needs</p>
          </div>
          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8 p-6">
            {staticServices.map((service, i) => (
              <div key={i} className="services-grid-item">
                <div className="service-icon-wrapper">
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="button button-secondary">View All Services</a>
          </div>
        </section>

        {/* Dynamic Services Section from API */}
        <section className="section">
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, color: '#efb5a3ff'}}>Explore Visa Services by Country</h2>
            <p style={{...styles.sectionSubtitle, color: '#c0d7e3ff'}}>Find detailed information for your desired destination.</p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm p-4">
                  {service.image && (
                    <img
                      src={`http://localhost:2828/uploads/${service.image}`}
                      alt={service.name}
                      className="mb-3"
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  )}

                  <h5><strong>{service.code}</strong> {service.name}</h5>
                  <ul className="list-unstyled mt-3 mb-2">
                    {service.visas?.split(',').map((visa, i) => (
                      <li key={i}>✔ {visa.trim()}</li>
                    ))}
                  </ul>
                  <p className="text-primary fw-bold">
                    Processing Time: {service.processing_time}
                  </p>
                  <p>{service.office}</p>
                  <p>{service.contact}</p>
                  <p>{service.email}</p>
                  <div className="d-flex gap-2 mt-3">
                    <button
                      onClick={() => bookdestination(service.id, service.price)}
                      className="btn btn-primary w-50"
                    >
                      Book Now ₹{service.price}
                    </button>
                    <a href={`tel:${service.contact}`} className="btn btn-success w-50">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          &copy; 2025 Viseas. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;