import React from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  { year: '2022', text: 'Founded Custom Web', icon: '🚀', color: '#FF6B35' },
  { year: '2023', text: '10+ Satisfied Clients', icon: '🤝', color: '#2ECC71' },
  { year: '2024', text: '12+ Projects Completed', icon: '🏆', color: '#0057D9' },
];

const values = [
  { icon: '💡', label: 'Innovation', description: 'Cutting-edge solutions for modern challenges', color: '#FF6B35' },
  { icon: '🤝', label: 'Customer Focus', description: 'Your success is our priority', color: '#2ECC71' },
  { icon: '⏰', label: 'On-Time Delivery', description: 'Meeting deadlines with quality', color: '#0057D9' },
  { icon: '🔒', label: 'Reliability', description: 'Dependable solutions you can trust', color: '#9333EA' },
];

const team = [
  { name: 'Development Team', role: 'Full-Stack Developers', icon: '👨‍💻' },
  { name: 'Design Team', role: 'UI/UX Designers', icon: '🎨' },
  { name: 'Support Team', role: '24/7 Customer Support', icon: '🛠️' },
];

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">
              About <span className="gradient-text">Custom Web</span>
            </h1>
            <p className="hero-subtitle">
              We are a creative digital solutions company with 2+ years of experience in designing and developing custom websites for businesses and individuals.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Projects Done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-description">
                At <span className="brand-highlight">Custom Web</span>, we believe in delivering excellence in every project. Our team is passionate about building creative, innovative, and reliable digital solutions that help our clients grow online.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">🎨</span>
                  <span>Web Design & Development</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎓</span>
                  <span>Education & Client Websites</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔧</span>
                  <span>Custom Solutions & Bug Fixing</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>24/7 Support & On-Time Delivery</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Get Started With Us
              </Link>
            </div>
            <div className="content-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
                  alt="Our Team Working" 
                  className="about-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Dedicated Team</h3>
                    <p>Working together to deliver excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Milestones that define our growth and commitment to excellence
            </p>
          </div>
          <div className="timeline">
            {highlights.map((highlight, index) => (
              <div key={highlight.year} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content card">
                  <div className="timeline-icon" style={{ background: highlight.color }}>
                    <span>{highlight.icon}</span>
                  </div>
                  <div className="timeline-info">
                    <h3 className="timeline-year" style={{ color: highlight.color }}>
                      {highlight.year}
                    </h3>
                    <p className="timeline-text">{highlight.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">
              Our mission is to empower our clients with innovative, reliable, and visually stunning web solutions that help them grow online.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.label} className="value-card card animate-fade-in-up">
                <div className="value-icon" style={{ background: `${value.color}20`, color: value.color }}>
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title" style={{ color: value.color }}>
                  {value.label}
                </h3>
                <p className="value-description">{value.description}</p>
                <div className="value-highlight" style={{ background: value.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-overview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the talented professionals behind Custom Web
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.name} className="team-card card">
                <div className="team-icon">
                  <span>{member.icon}</span>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="team-cta">
            <Link to="/team" className="btn btn-outline">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content card-elevated">
            <h2 className="cta-title">Ready to Work With Us?</h2>
            <p className="cta-description">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-secondary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        .about-page {
          background: #181A20;
          min-height: 100vh;
        }

        /* Hero Section */
        .about-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0057D9 0%, #2ECC71 50%, #FF6B35 100%);
          opacity: 0.9;
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          background-size: 100px 100px;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: #E5E7EB;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD700, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: clamp(2rem, 6vw, 4rem);
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          opacity: 0.8;
        }

        /* Who We Are Section */
        .who-we-are {
          background: #181A20;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 6vw, 4rem);
          align-items: center;
        }

        .content-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-title {
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .section-description {
          color: #A0AEC0;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          line-height: 1.7;
        }

        .brand-highlight {
          color: #FF6B35;
          font-weight: 700;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #E5E7EB;
          font-weight: 500;
        }

        .feature-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(46, 204, 113, 0.1);
          border-radius: 50%;
        }

        .content-image {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .about-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 2rem;
          color: white;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .image-container:hover .about-image {
          transform: scale(1.05);
        }

        .image-container:hover .image-overlay {
          transform: translateY(0);
        }

        .overlay-content h3 {
          margin-bottom: 0.5rem;
          color: #2ECC71;
        }

        /* Journey Timeline */
        .journey-section {
          background: #23272F;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #2ECC71, #0057D9, #FF6B35);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-content {
          position: relative;
          width: 45%;
          padding: 1.5rem;
          background: #181A20;
          border: 1px solid rgba(46, 204, 113, 0.2);
        }

        .timeline-item.left .timeline-content {
          margin-left: 0;
          margin-right: auto;
        }

        .timeline-item.right .timeline-content {
          margin-left: auto;
          margin-right: 0;
        }

        .timeline-icon {
          position: absolute;
          top: 50%;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          transform: translateY(-50%);
          border: 4px solid #181A20;
        }

        .timeline-item.left .timeline-icon {
          right: -85px;
        }

        .timeline-item.right .timeline-icon {
          left: -85px;
        }

        .timeline-year {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-text {
          color: #A0AEC0;
          margin: 0;
        }

        /* Values Section */
        .values-section {
          background: #181A20;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .value-card {
          position: relative;
          text-align: center;
          padding: 2rem;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
        }

        .value-title {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .value-description {
          color: #A0AEC0;
          line-height: 1.6;
        }

        .value-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .value-card:hover .value-highlight {
          transform: scaleX(1);
        }

        /* Team Overview */
        .team-overview {
          background: #23272F;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .team-card {
          text-align: center;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .team-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .team-name {
          color: #E5E7EB;
          margin-bottom: 0.5rem;
        }

        .team-role {
          color: #A0AEC0;
          margin: 0;
        }

        .team-cta {
          text-align: center;
        }

        /* CTA Section */
        .about-cta {
          background: linear-gradient(135deg, #23272F, #181A20);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 87, 217, 0.1));
          border: 1px solid rgba(46, 204, 113, 0.2);
        }

        .cta-title {
          margin-bottom: 1rem;
          color: #E5E7EB;
        }

        .cta-description {
          color: #A0AEC0;
          margin-bottom: 2rem;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline::before {
            left: 30px;
          }

          .timeline-content {
            width: calc(100% - 80px);
            margin-left: 80px !important;
            margin-right: 0 !important;
          }

          .timeline-icon {
            left: 0 !important;
            right: auto !important;
          }

          .hero-stats {
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .timeline {
            padding-left: 1rem;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px !important;
          }

          .timeline-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export default About; 