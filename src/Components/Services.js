import React from 'react';
import './Services.css'; // optional for extra styling

const servicesData = [
  {
    title: 'Business Visa',
    desc: 'We help streamline your travel for business ventures across countries with minimal hassle and documentation.',
    image: 'images/s1.png',
    price: 2500,
  },
  {
    title: 'Work Visa',
    desc: 'Our team assists professionals to get work permits with proper legal compliance and employer coordination.',
    image: 'images/s2.png',
    price: 3000,
  },
  {
    title: 'Tourist Visa',
    desc: 'Get your tourist visa easily with our guided services including document prep and itinerary advice.',
    image: 'images/s3.png',
    price: 1500,
  },
];

const Services = () => {
  const handlePayment = (title, price) => {
    const options = {
      key: 'rzp_test_60v2W0km5tB9fH',
      amount: price * 100,
      currency: 'INR',
      name: 'Viseas Visa Services',
      description: `Payment for ${title}`,
      handler: function (response) {
        alert('✅ Payment Successful: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Vaishali',
        email: 'vaishali@example.com',
        contact: '9999999999',
      },
      theme: { color: '#0d6efd' },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {servicesData.map((service, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="box shadow p-3 h-100">
                <div className="img-box text-center mb-3">
                  <img src={service.image} alt={service.title} width="80" />
                </div>
                <div className="detail-box text-center">
                  <h6>{service.title}</h6>
                  <p>{service.desc}</p>
                  <div className="d-flex justify-content-center gap-2 mt-3 flex-column flex-sm-row">
                    <a href="#" className="btn btn-primary">Read More</a>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handlePayment(service.title, service.price)}
                    >
                      Book Now ₹{service.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
