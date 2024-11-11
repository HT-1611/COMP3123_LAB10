import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '2px solid green' }}>
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>

        {/* Email and Full Name */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Address */}
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="1234 Main St"
          value={formData.address}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        {/* Address 2 */}
        <label>Address 2</label>
        <input
          type="text"
          name="address2"
          placeholder="Apartment, studio, or floor"
          value={formData.address2}
          onChange={handleChange}
          style={{ width: '100%' }}
        />

        {/* City, Province, Postal Code */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            >
              <option value="">Choose...</option>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Alberta">Alberta</option>
              {/* Add other provinces as needed */}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div style={{ marginTop: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            {' '}Agree Terms & Condition?
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Information:</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Address 2:</strong> {submittedData.address2}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
          <p><strong>Terms Accepted:</strong> {submittedData.agreeTerms ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
