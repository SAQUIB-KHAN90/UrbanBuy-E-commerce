import React, { useState } from "react";
import "./modal.css";

const Modal = ({ handleCloseModal, handlePayment }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    if (name && address && pincode && mobile) {
      handlePayment(); // Trigger Razorpay payment
    } else {
      alert("Please fill all the details");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Enter your details</h3>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Pincode:</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        <label>Mobile:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button onClick={handleSubmit}>Order Now</button>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
