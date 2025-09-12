import React, { useState } from 'react'

const DonateFood = ({ onAddDonation }) => {
  const [formData, setFormData] = useState({
    donorName: '',
    donorType: 'restaurant',
    foodType: '',
    quantity: '',
    description: '',
    pickupLocation: '',
    contactInfo: '',
    availableUntil: '',
    specialInstructions: ''
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
    onAddDonation(formData)
    setIsSubmitted(true)
    setFormData({
      donorName: '',
      donorType: 'restaurant',
      foodType: '',
      quantity: '',
      description: '',
      pickupLocation: '',
      contactInfo: '',
      availableUntil: '',
      specialInstructions: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const foodTypes = [
    'Fresh Produce', 'Baked Goods', 'Prepared Meals', 'Dairy Products',
    'Meat & Poultry', 'Canned Goods', 'Beverages', 'Frozen Foods', 'Other'
  ]

  return (
    <div className="donate-food">
      <div className="container">
        <div className="page-header">
          <h1>🍽️ Donate Food</h1>
          <p>Help reduce food waste by donating surplus food to those in need</p>
        </div>

        {isSubmitted && (
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h3>Thank you for your donation!</h3>
            <p>We'll contact you soon to arrange pickup. Your contribution makes a real difference.</p>
          </div>
        )}

        <div className="form-container">
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-section">
              <h3>Donor Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="donorName">Donor Name/Organization *</label>
                  <input
                    type="text"
                    id="donorName"
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name or organization name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="donorType">Donor Type *</label>
                  <select
                    id="donorType"
                    name="donorType"
                    value={formData.donorType}
                    onChange={handleChange}
                    required
                  >
                    <option value="restaurant">Restaurant</option>
                    <option value="catering">Catering Company</option>
                    <option value="grocery">Grocery Store</option>
                    <option value="bakery">Bakery</option>
                    <option value="individual">Individual</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Food Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="foodType">Food Type *</label>
                  <select
                    id="foodType"
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select food type</option>
                    {foodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity *</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 50 meals, 20 lbs, 3 boxes"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Describe the food items in detail..."
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Pickup Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupLocation">Pickup Location *</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    placeholder="Full address where food can be picked up"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="availableUntil">Available Until *</label>
                  <input
                    type="datetime-local"
                    id="availableUntil"
                    name="availableUntil"
                    value={formData.availableUntil}
                    onChange={handleChange}
                    required
                  />
                </div>
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
              <div className="form-group">
                <label htmlFor="specialInstructions">Special Instructions</label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Any special handling requirements, access instructions, etc."
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                🍽️ Submit Donation
              </button>
            </div>
          </form>
        </div>

        <div className="donation-info">
          <h3>Donation Guidelines</h3>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">✅</div>
              <h4>Acceptable Items</h4>
              <ul>
                <li>Fresh produce and prepared meals</li>
                <li>Non-perishable food items</li>
                <li>Baked goods and dairy products</li>
                <li>Frozen foods (properly stored)</li>
              </ul>
            </div>
            <div className="info-card">
              <div className="info-icon">❌</div>
              <h4>Not Acceptable</h4>
              <ul>
                <li>Expired or spoiled food</li>
                <li>Food that has been served</li>
                <li>Alcohol or tobacco products</li>
                <li>Food without proper packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateFood
