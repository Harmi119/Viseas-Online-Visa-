import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:2828/api/services')
      .then((res) => {
        if (res.data.success) {
          setServices(res.data.services);
        }
      })
      .catch((err) => console.log("Error fetching services", err));
  }, []);

  

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Explore Visa Services by Country</h2>
      <p className="text-center mb-5 text-muted">Find detailed information for your desired destination.</p>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm p-4">
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
                <button onClick={() => handlePayment(service.id, service.price)} className="btn btn-primary w-50">
                  Get Quote
                </button>
                <a href={`tel:${service.contact}`} className="btn btn-success w-50">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
