import React, { useState } from 'react'

const Inventory = ({ donations, charities, onUpdateDonation }) => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDonations = donations.filter(donation => {
    const matchesFilter = filter === 'all' || donation.status === filter
    const matchesSearch = donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.foodType.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })  

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'status-available'
      case 'distributed': return 'status-distributed'
      case 'expired': return 'status-expired'
      default: return 'status-available'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return '✅'
      case 'distributed': return '📦'
      case 'expired': return '⏰'
      default: return '✅'
    }
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

  const stats = {
    total: donations.length,
    available: donations.filter(d => d.status === 'available').length,
    distributed: donations.filter(d => d.status === 'distributed').length,
    expired: donations.filter(d => d.status === 'expired').length
  }

  return (
    <div className="inventory">
      <div className="container">
        <div className="page-header">
          <h1>📊 Food Inventory Dashboard</h1>
          <p>Manage and track all food donations in the system</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card stat-total">
            <div className="stat-icon">📦</div>
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Donations</div>
          </div>
          <div className="stat-card stat-available">
            <div className="stat-icon">✅</div>
            <div className="stat-number">{stats.available}</div>
            <div className="stat-label">Available</div>
          </div>
          <div className="stat-card stat-distributed">
            <div className="stat-icon">🚚</div>
            <div className="stat-number">{stats.distributed}</div>
            <div className="stat-label">Distributed</div>
          </div>
          <div className="stat-card stat-expired">
            <div className="stat-icon">⏰</div>
            <div className="stat-number">{stats.expired}</div>
            <div className="stat-label">Expired</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="inventory-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search donations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({stats.total})
            </button>
            <button 
              className={`filter-btn ${filter === 'available' ? 'active' : ''}`}
              onClick={() => setFilter('available')}
            >
              Available ({stats.available})
            </button>
            <button 
              className={`filter-btn ${filter === 'distributed' ? 'active' : ''}`}
              onClick={() => setFilter('distributed')}
            >
              Distributed ({stats.distributed})
            </button>
            <button 
              className={`filter-btn ${filter === 'expired' ? 'active' : ''}`}
              onClick={() => setFilter('expired')}
            >
              Expired ({stats.expired})
            </button>
          </div>
        </div>

        {/* Donations List */}
        <div className="donations-list">
          {filteredDonations.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <h3>No donations found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            filteredDonations.map(donation => (
              <div key={donation.id} className="donation-card">
                <div className="donation-header">
                  <div className="donation-info">
                    <h3 className="donor-name">{donation.donorName}</h3>
                    <p className="donor-type">{donation.donorType}</p>
                  </div>
                  <div className={`status-badge ${getStatusColor(donation.status)}`}>
                    <span className="status-icon">{getStatusIcon(donation.status)}</span>
                    <span className="status-text">{donation.status}</span>
                  </div>
                </div>
                
                <div className="donation-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Food Type:</span>
                      <span className="detail-value">{donation.foodType}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Quantity:</span>
                      <span className="detail-value">{donation.quantity}</span>
                    </div>
                  </div>
                  
                  {donation.description && (
                    <div className="detail-row">
                      <div className="detail-item full-width">
                        <span className="detail-label">Description:</span>
                        <span className="detail-value">{donation.description}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{donation.pickupLocation}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Contact:</span>
                      <span className="detail-value">{donation.contactInfo}</span>
                    </div>
                  </div>
                  
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Added:</span>
                      <span className="detail-value">{formatDate(donation.dateAdded)}</span>
                    </div>
                    {donation.availableUntil && (
                      <div className="detail-item">
                        <span className="detail-label">Available Until:</span>
                        <span className="detail-value">{formatDate(donation.availableUntil)}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {donation.specialInstructions && (
                  <div className="special-instructions">
                    <span className="detail-label">Special Instructions:</span>
                    <span className="detail-value">{donation.specialInstructions}</span>
                  </div>
                )}
                
                <div className="donation-actions">
                  {donation.status === 'available' && (
                    <button 
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        const updatedDonations = donations.map(d => 
                          d.id === donation.id ? { ...d, status: 'distributed' } : d
                        )
                        onUpdateDonation(updatedDonations)
                      }}
                    >
                      Mark as Distributed
                    </button>
                  )}
                  <button className="btn btn-sm btn-secondary">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Inventory
