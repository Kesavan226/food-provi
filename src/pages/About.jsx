import React from 'react'

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Passionate about reducing food waste and fighting hunger in our community.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      bio: 'Ensures smooth coordination between donors and recipients.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach',
      bio: 'Builds relationships with local businesses and charities.',
      avatar: '👩‍🤝‍👩'
    },
    {
      name: 'David Thompson',
      role: 'Logistics Coordinator',
      bio: 'Manages pickup and delivery operations efficiently.',
      avatar: '👨‍🚚'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Founded',
      description: 'FoodShare was established with a mission to reduce food waste and fight hunger.'
    },
    {
      year: '2021',
      title: 'First 1000 Meals',
      description: 'Successfully distributed our first 1000 meals to local charities.'
    },
    {
      year: '2022',
      title: '50+ Partners',
      description: 'Expanded our network to include 50+ restaurants and businesses.'
    },
    {
      year: '2023',
      title: '10,000+ Meals',
      description: 'Reached a major milestone of distributing over 10,000 meals.'
    },
    {
      year: '2024',
      title: 'Digital Platform',
      description: 'Launched our digital platform to streamline the donation process.'
    }
  ]

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About FoodShare</h1>
          <p className="hero-subtitle">
            Connecting surplus food with communities in need, one meal at a time.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                FoodShare is dedicated to reducing food waste while addressing hunger in our community. 
                We believe that no one should go hungry when there's perfectly good food going to waste.
              </p>
              <p>
                Our platform connects restaurants, grocery stores, and other food businesses with 
                charities, shelters, and individuals who need food assistance. By facilitating these 
                connections, we create a sustainable solution that benefits everyone.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Meals Distributed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">75+</div>
                <div className="stat-label">Partner Organizations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Volunteers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25</div>
                <div className="stat-label">Tons of Food Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>We're committed to reducing food waste and creating a more sustainable food system for our community.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We believe in the power of community and work to strengthen connections between local businesses and organizations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Every person deserves access to nutritious food, and we approach our work with empathy and understanding.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Efficiency</h3>
              <p>We use technology and streamlined processes to ensure food reaches those in need quickly and safely.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <h2>How We Make a Difference</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Food Donation</h3>
                <p>Restaurants, grocery stores, and businesses donate surplus food that would otherwise go to waste.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Collection & Storage</h3>
                <p>Our team collects the donated food and ensures it's properly stored and handled according to safety standards.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Distribution</h3>
                <p>Food is distributed to registered charities, shelters, and individuals in need within 24 hours.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Impact Tracking</h3>
                <p>We track and report on the impact of our work, ensuring transparency and continuous improvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@foodshare.org</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>(555) 123-FOOD</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>123 Community Street<br />Food City, FC 12345</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
