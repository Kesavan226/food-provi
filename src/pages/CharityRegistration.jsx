import React, { useState } from 'react'

const CharityRegistration = ({ onAddCharity }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    organizationType: 'charity',
    foodNeeded: '',
    quantity: '',
    location: '',
    contactInfo: '',
    servingCapacity: '',
    specialRequirements: '',
    frequency: 'one-time'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddCharity(formData)
    setIsSubmitted(true)
    setFormData({
      organizationName: '',
      contactPerson: '',
      organizationType: 'charity',
      foodNeeded: '',
      quantity: '',
      location: '',
      contactInfo: '',
      servingCapacity: '',
      specialRequirements: '',
      frequency: 'one-time'
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const organizationTypes = [
    'Charity Organization',
    'Homeless Shelter',
    'Food Bank',
    'Community Kitchen',
    'Church/Religious Organization',
    'School Program',
    'Individual/Family',
    'Other'
  ]

  const foodCategories = [
    'Fresh Produce',
    'Prepared Meals',
    'Baked Goods',
    'Dairy Products',
    'Meat & Poultry',
    'Canned Goods',
    'Beverages',
    'Any Available'
  ]

  return (
    <div className="charity-registration">
      <div className="container">
        <div className="page-header">
          <h1>🤝 Request Food</h1>
          <p>Register to receive food donations for your organization or community</p>
        </div>

        {isSubmitted && (
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h3>Registration Successful!</h3>
            <p>We'll contact you when food donations become available that match your needs.</p>
          </div>
        )}

        <div className="form-container">
          <form onSubmit={handleSubmit} className="charity-form">
            <div className="form-section">
              <h3>Organization Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="organizationName">Organization/Person Name *</label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    placeholder="Enter organization or individual name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Name of primary contact person"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="organizationType">Organization Type *</label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    required
                  >
                    {organizationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="servingCapacity">Serving Capacity</label>
                  <input
                    type="text"
                    id="servingCapacity"
                    name="servingCapacity"
                    value={formData.servingCapacity}
                    onChange={handleChange}
                    placeholder="e.g., 50 people, 100 meals per day"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Food Requirements</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="foodNeeded">Food Type Needed *</label>
                  <select
                    id="foodNeeded"
                    name="foodNeeded"
                    value={formData.foodNeeded}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select food type needed</option>
                    {foodCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity Needed</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 50 meals, 20 lbs, 3 boxes"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="frequency">Request Frequency *</label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="one-time">One-time Request</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="as-needed">As Needed</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="specialRequirements">Special Requirements</label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any dietary restrictions, storage requirements, or special needs..."
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Contact & Location</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Location/Address *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Full address where food will be delivered"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactInfo">Contact Information *</label>
                  <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    required
                    placeholder="Phone number or email"
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                🤝 Submit Request
              </button>
            </div>
          </form>
        </div>

        <div className="charity-info">
          <h3>How It Works</h3>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📝</div>
              <h4>1. Register</h4>
              <p>Fill out the form above with your organization details and food needs.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🔔</div>
              <h4>2. Get Notified</h4>
              <p>We'll contact you when food donations become available that match your needs.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🚚</div>
              <h4>3. Receive Food</h4>
              <p>Coordinate pickup or delivery of the donated food to serve your community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityRegistration
