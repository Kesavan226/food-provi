import React from 'react'

const Home = ({ totalDonations, totalCharities, totalDistributions, onPageChange }) => {
  const stats = [
    { 
      number: totalDistributions, 
      label: 'Meals Distributed', 
      icon: '🍽️',
      color: 'stat-green'
    },
    { 
      number: totalDonations, 
      label: 'Food Donations', 
      icon: '📦',
      color: 'stat-blue'
    },
    { 
      number: totalCharities, 
      label: 'Partner Organizations', 
      icon: '🤝',
      color: 'stat-orange'
    },
    { 
      number: '50+', 
      label: 'Volunteers', 
      icon: '👥',
      color: 'stat-purple'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Reducing Food Waste, <br />
            <span className="hero-highlight">Feeding Communities</span>
          </h1>
          <p className="hero-description">
            Connect surplus food from restaurants and businesses with charities and individuals in need. 
            Together, we can reduce food waste while fighting hunger in our community.
          </p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => onPageChange('donate')}
            >
              🍽️ Donate Food
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => onPageChange('charity')}
            >
              🤝 Request Food
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card ${stat.color}`}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">🍽️</div>
              <h3>Donate Food</h3>
              <p>Restaurants and businesses donate surplus food that would otherwise go to waste.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">📋</div>
              <h3>We Collect</h3>
              <p>Our team collects and safely stores the donated food, ensuring quality and safety.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🚚</div>
              <h3>We Distribute</h3>
              <p>Food is distributed to charities, shelters, and individuals in need within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join our mission to reduce food waste and fight hunger in the community.</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => onPageChange('donate')}
              >
                Start Donating
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => onPageChange('about')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
