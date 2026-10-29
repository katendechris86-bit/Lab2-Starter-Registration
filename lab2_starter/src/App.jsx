import React, { useState } from 'react';

export default function WorkshopRegistration() {
  // 1. Form values state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    age: '',
    portfolio: '',
    workshop: 'React Foundations'
  });

  // 2. Errors and registrations state
  const [errors, setErrors] = useState({});
  const [registrations, setRegistrations] = useState([]);

  // Universal change handler for all controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We will add validation logic here next!
  };

  return (
    <div className="container">
      <h2>Workshop Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Email Input */}
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Workshop Select */}
        <div>
          <label>Select Workshop:</label>
          <select 
            name="workshop" 
            value={formData.workshop} 
            onChange={handleChange}
          >
            <option value="React Foundations">React Foundations</option>
            <option value="Advanced UI/UX">Advanced UI/UX</option>
            <option value="State Management">State Management</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}