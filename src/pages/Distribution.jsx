import React, { useState } from 'react'

const Distribution = ({ donations, charities, distributions, onAddDistribution }) => {
  const [selectedDonation, setSelectedDonation] = useState('')
  const [selectedCharity, setSelectedCharity] = useState('')
  const [distributionNotes, setDistributionNotes] = useState('')

  const handleDistribution = (e) => {
    e.preventDefault()
    if (!selectedDonation || !selectedCharity) return

    const donation = donations.find(d => d.id === parseInt(selectedDonation))
    const charity = charities.find(c => c.id === parseInt(selectedCharity))

    const newDistribution = {
      donationId: parseInt(selectedDonation),
      charityId: parseInt(selectedCharity),
      donationDetails: donation,
      charityDetails: charity,
      notes: distributionNotes,
      distributedBy: 'Admin' // In a real app, this would be the logged-in user
    }

    onAddDistribution(newDistribution)
    
    // Reset form
    setSelectedDonation('')
    setSelectedCharity('')
    setDistributionNotes('')
    
    alert('Distribution recorded successfully!')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="distribution">
      <div className="container">
        <div className="page-header">
          <h1>🚚 Food Distribution</h1>
          <p>Manage food distribution to charities and organizations</p>
        </div>

        <div className="distribution-grid">
          {/* Distribution Form */}
          <div className="distribution-form-section">
            <div className="form-card">
              <h3>Record New Distribution</h3>
              <form onSubmit={handleDistribution} className="distribution-form">
                <div className="form-group">
                  <label htmlFor="donation">Select Food Donation *</label>
                  <select
                    id="donation"
                    value={selectedDonation}
                    onChange={(e) => setSelectedDonation(e.target.value)}
                    required
                  >
                    <option value="">Choose a donation...</option>
                    {donations.map(donation => (
                      <option key={donation.id} value={donation.id}>
                        {donation.donorName} - {donation.foodType} ({donation.quantity})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="charity">Select Recipient *</label>
                  <select
                    id="charity"
                    value={selectedCharity}
                    onChange={(e) => setSelectedCharity(e.target.value)}
                    required
                  >
                    <option value="">Choose a charity...</option>
                    {charities.map(charity => (
                      <option key={charity.id} value={charity.id}>
                        {charity.organizationName} - {charity.organizationType}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Distribution Notes</label>
                  <textarea
                    id="notes"
                    value={distributionNotes}
                    onChange={(e) => setDistributionNotes(e.target.value)}
                    rows="3"
                    placeholder="Add any notes about the distribution..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={!selectedDonation || !selectedCharity}
                >
                  🚚 Record Distribution
                </button>
              </form>
            </div>
          </div>

          {/* Available Donations */}
          <div className="available-donations-section">
            <h3>Available Donations ({donations.length})</h3>
            <div className="donations-list">
              {donations.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📦</div>
                  <p>No available donations</p>
                </div>
              ) : (
                donations.map(donation => (
                  <div key={donation.id} className="donation-item">
                    <div className="donation-header">
                      <h4>{donation.donorName}</h4>
                      <span className="donation-type">{donation.donorType}</span>
                    </div>
                    <div className="donation-details">
                      <p><strong>Food:</strong> {donation.foodType}</p>
                      <p><strong>Quantity:</strong> {donation.quantity}</p>
                      <p><strong>Location:</strong> {donation.pickupLocation}</p>
                      <p><strong>Available Until:</strong> {formatDate(donation.availableUntil)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Registered Charities */}
          <div className="charities-section">
            <h3>Registered Charities ({charities.length})</h3>
            <div className="charities-list">
              {charities.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🤝</div>
                  <p>No registered charities</p>
                </div>
              ) : (
                charities.map(charity => (
                  <div key={charity.id} className="charity-item">
                    <div className="charity-header">
                      <h4>{charity.organizationName}</h4>
                      <span className="charity-type">{charity.organizationType}</span>
                    </div>
                    <div className="charity-details">
                      <p><strong>Contact:</strong> {charity.contactPerson || 'N/A'}</p>
                      <p><strong>Food Needed:</strong> {charity.foodNeeded}</p>
                      <p><strong>Capacity:</strong> {charity.servingCapacity || 'N/A'}</p>
                      <p><strong>Location:</strong> {charity.location}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Distribution History */}
        <div className="distribution-history">
          <h3>Distribution History ({distributions.length})</h3>
          <div className="history-list">
            {distributions.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <p>No distributions recorded yet</p>
              </div>
            ) : (
              distributions.map(distribution => (
                <div key={distribution.id} className="history-item">
                  <div className="history-header">
                    <div className="history-info">
                      <h4>{distribution.donationDetails.donorName}</h4>
                      <p>→ {distribution.charityDetails.organizationName}</p>
                    </div>
                    <div className="history-date">
                      {formatDate(distribution.dateDistributed)}
                    </div>
                  </div>
                  <div className="history-details">
                    <div className="detail-row">
                      <span><strong>Food:</strong> {distribution.donationDetails.foodType}</span>
                      <span><strong>Quantity:</strong> {distribution.donationDetails.quantity}</span>
                    </div>
                    <div className="detail-row">
                      <span><strong>Distributed by:</strong> {distribution.distributedBy}</span>
                    </div>
                    {distribution.notes && (
                      <div className="history-notes">
                        <strong>Notes:</strong> {distribution.notes}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Distribution
