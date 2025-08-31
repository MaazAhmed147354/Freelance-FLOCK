import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Processed Successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Info */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          ></textarea>

          {/* Payment Info */}
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-lg"
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>

          {/* Notes */}
          <textarea
            name="notes"
            placeholder="Order Notes (optional)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-semibold"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
