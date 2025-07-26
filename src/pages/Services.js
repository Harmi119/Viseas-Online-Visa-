import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const visaServices = [
    {
      icon: '✈',
      title: 'Tourist Visas',
      description: 'Effortlessly plan your leisure travel with our comprehensive tourist visa services for popular destinations worldwide. We handle all paperwork and appointments.',
      features: ['Application assistance', 'Document checklist', 'Interview preparation', 'Travel itinerary guidance']
    },
    {
      icon: '🎓',
      title: 'Student Visas',
      description: 'Embark on your academic journey abroad with our expert assistance for student visa applications. We guide you from admission to visa approval.',
      features: ['University application support', 'SOP/LOR guidance', 'Financial document preparation', 'Post-study work permit advice']
    },
    {
      icon: '💼',
      title: 'Work Visas',
      description: 'Unlock global career opportunities with our streamlined work visa services. We assist skilled professionals in securing employment visas worldwide.',
      features: ['Job search resources', 'Employer sponsorship guidance', 'Work permit application', 'Compliance checks']
    },
    {
      icon: '🏢',
      title: 'Business Visas',
      description: 'Facilitate your international business ventures with our efficient business visa processing. Ideal for meetings, conferences, and investments.',
      features: ['Invitation letter support', 'Conference registration assistance', 'Expedited processing options', 'Multi-entry visa advice']
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Reunification Visas',
      description: 'Bring your loved ones closer with our dedicated family visa services. We help families reunite across borders with compassionate and efficient support.',
      features: ['Spousal/Partner visas', 'Child/Dependent visas', 'Parent visas', 'Appeal and review support']
    },
    {
      icon: '🌐',
      title: 'Immigration & Residency',
      description: 'Explore permanent residency and immigration pathways with our comprehensive guidance. We assist individuals and families seeking long-term settlement.',
      features: ['Skilled migration programs', 'Investment immigration', 'Citizenship by investment', 'Residency renewals']
    },
  ];

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
                <Link to="/services" className="nav-link active">Services</Link>
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
          <h1 className="heading-primary mb-6">Our Expert Visa Services 🌍</h1>
          <p className="subheading">
            Viseas offers a wide array of specialized visa and immigration services designed to cater to your every international need. Explore our offerings:
          </p>
        </div>

        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
          {visaServices.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-icon">{service.icon}</div>
              <h2 className="service-detail-title">{service.title}</h2>
              <p className="service-detail-description">{service.description}</p>
              <h3 className="heading-secondary" style={{fontSize: '1.125rem', marginBottom: '0.75rem', color: '#444'}}>Key Features:</h3>
              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="mt-auto text-center">
                <Link
                  to="/contact"
                  className="service-link-button"
                >
                  Learn More / Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="service-cta-banner">
            <h2 className="service-cta-title">Don't see your service listed?</h2>
            <p className="service-cta-desc">
                Our services are highly customizable. Contact us to discuss your specific immigration or visa requirements.
            </p>
            <Link
                to="/contact"
                className="service-cta-button"
            >
                Contact Our Experts
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

export default Services;