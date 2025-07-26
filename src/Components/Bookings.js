// src/components/Bookings.jsx
import React, { useEffect, useState } from "react";
import Axios from "axios";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:2828/api/bookings")
      .then((res) => {
        if (res.data.success) {
          setBookings(res.data.bookings);
        } else {
          alert("Failed to load bookings");
        }
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Service Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Payment ID</th>
                <th>Service</th>
                <th>User</th>
                <th>Amount</th>
                <th>Booked At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={b.id}>
                  <td>{i + 1}</td>
                  <td>{b.payment_id}</td>
                  <td>{b.service}</td>
                  <td>{b.user}</td>
                  <td>₹{b.amount}</td>
                  <td>{new Date(b.booked_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Bookings;
