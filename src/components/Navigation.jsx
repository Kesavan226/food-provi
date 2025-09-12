import React from 'react'

const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'donate', label: 'Donate Food', icon: '🍽️' },
    { id: 'charity', label: 'Request Food', icon: '🤝' },
    { id: 'inventory', label: 'Dashboard', icon: '📊' },
    { id: 'distribution', label: 'Distribution', icon: '🚚' },
    { id: 'about', label: 'About', icon: 'ℹ️' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🍎</span>
          <span className="logo-text">Food Provi</span>
        </div>
        
        <div className="nav-menu">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
