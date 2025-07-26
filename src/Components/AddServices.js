import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddService() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    city: '',
    price: ''
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, city, price } = formData;
    if (!name || !description || !city || !price || !imageFile) {
      Swal.fire('Error', 'Please fill in all fields', 'error');
      return;
    }

    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('city', city);
    data.append('price', price);
    data.append('image', imageFile); // ✅ this line adds file to FormData

    axios.post('http://localhost:2828/api/add-service', data)
      .then((res) => {
        if (res.data.success) {
          Swal.fire('Success', 'Service added successfully!', 'success');
          setFormData({ name: '', description: '', city: '', price: '' });
          setImageFile(null);
        } else {
          Swal.fire('Error', 'Failed to add service!', 'error');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        Swal.fire('Error', 'Something went wrong!', 'error');
      });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Add New Service</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            style={{ flex: '1', minWidth: '180px' }}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            style={{ flex: '1', minWidth: '180px' }}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            className="form-control"
            value={formData.city}
            onChange={handleChange}
            style={{ flex: '1', minWidth: '180px' }}
          />

          <input
            type="file"
            name="image"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
            style={{ flex: '1', minWidth: '180px' }}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            style={{ flex: '1', minWidth: '180px' }}
          />

          <button
            type="submit"
            className="btn"
            style={{
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddService;
