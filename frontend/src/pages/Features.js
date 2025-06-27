import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: '24/7 Support',
    desc: 'Round-the-clock support to help you with any questions or technical issues.',
    icon: '📞',
    color: '#0057D9',
    details: ['Live Chat Support', 'Email Support', 'Phone Support', 'Emergency Assistance']
  },
  {
    title: 'On-Time Delivery',
    desc: 'We deliver your projects on time, every time, without compromising quality.',
    icon: '⏰',
    color: '#FF6B35',
    details: ['Project Timeline', 'Regular Updates', 'Milestone Tracking', 'Quality Assurance']
  },
  {
    title: 'Custom Solutions',
    desc: 'Tailored web solutions designed specifically for your unique business needs.',
    icon: '🛠️',
    color: '#2ECC71',
    details: ['Custom Design', 'Unique Features', 'Scalable Architecture', 'Future-Proof Code']
  },
  {
    title: 'Satisfied Customers',
    desc: 'Our clients are our top priority and we strive for 100% customer satisfaction.',
    icon: '😊',
    color: '#9333EA',
    details: ['Client Testimonials', 'Repeat Customers', 'Referral Program', 'Success Stories']
  },
  {
    title: 'Free Domain & SSL',
    desc: 'Get a free domain name and SSL certificate with every hosting plan.',
    icon: '🌐',
    color: '#0057D9',
    details: ['Free Domain Registration', 'SSL Certificate', 'DNS Management', 'Email Accounts']
  },
  {
    title: 'Secure Hosting',
    desc: 'Your website is hosted on secure, fast, and reliable servers.',
    icon: '🔒',
    color: '#FF6B35',
    details: ['99.9% Uptime', 'Daily Backups', 'Security Monitoring', 'CDN Integration']
  },
  {
    title: 'Mobile Responsive',
    desc: 'All websites are fully responsive and optimized for mobile devices.',
    icon: '📱',
    color: '#2ECC71',
    details: ['Mobile-First Design', 'Cross-Browser Compatible', 'Touch Optimized', 'Fast Loading']
  },
  {
    title: 'SEO Optimized',
    desc: 'Built-in SEO optimization to help your website rank higher in search results.',
    icon: '🚀',
    color: '#0057D9',
    details: ['Meta Tags', 'Schema Markup', 'Site Speed Optimization', 'Analytics Integration']
  },
  {
    title: 'Easy Management',
    desc: 'User-friendly admin panel to easily manage your website content.',
    icon: '⚡',
    color: '#FF6B35',
    details: ['Content Management', 'User Dashboard', 'Easy Updates', 'Training Provided']
  }
];

const benefits = [
  {
    title: 'Cost Effective',
    desc: 'Get premium quality websites at affordable prices',
    icon: '💰',
    color: '#2ECC71'
  },
  {
    title: 'Modern Technology',
    desc: 'Built with latest web technologies and frameworks',
    icon: '⚡',
    color: '#0057D9'
  },
  {
    title: 'Scalable Solutions',
    desc: 'Websites that grow with your business needs',
    icon: '📈',
    color: '#FF6B35'
  },
  {
    title: 'Expert Team',
    desc: 'Experienced developers and designers at your service',
    icon: '👥',
    color: '#9333EA'
  }
];

function Features() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="hero-subtitle">
              Discover the comprehensive features that make our web development services stand out from the competition.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">9+</span>
                <span className="stat-label">Key Features</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section section" style={{ marginTop: '160px' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">
              Comprehensive features designed to give you the best web development experience
            </p>
          </div>
          <div className="services-grid">
            {features.map((feature, index) => (
              <div key={feature.title} className="service-card card animate-fade-in-up">
                <div className="service-header">
                  <div className="service-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                    <span>{feature.icon}</span>
                  </div>
                </div>
                <div className="service-content" style={{ textAlign: 'left' }}>
                  <h3 className="service-title" style={{ color: feature.color, fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                    {feature.title}
                  </h3>
                  <p className="service-description" style={{ color: '#A0AEC0', fontSize: '1rem', marginBottom: '0.7rem' }}>{feature.desc}</p>
                  <div className="service-features">
                    <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.3rem' }}>Includes:</h4>
                    <ul style={{ paddingLeft: '1.1em', margin: 0 }}>
                      {feature.details.map((detail, idx) => (
                        <li key={idx} style={{ marginBottom: '0.3rem', display: 'flex', alignItems: 'center' }}>
                          <span className="feature-check" style={{ color: feature.color, marginRight: '0.5rem', fontWeight: 700 }}>
3</span>
                          <span style={{ color: '#E5E7EB', fontSize: '0.98rem' }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="service-highlight" style={{ background: feature.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Custom Web</h2>
            <p className="section-subtitle">
              The advantages that set us apart in the web development industry
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="benefit-card card">
                <div className="benefit-icon" style={{ color: benefit.color }}>
                  <span>{benefit.icon}</span>
                </div>
                <h3 className="benefit-title" style={{ color: benefit.color }}>
                  {benefit.title}
                </h3>
                <p className="benefit-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Custom Web vs Others</h2>
            <p className="section-subtitle">
              See how we compare to other web development services
            </p>
          </div>
          <div className="comparison-table card">
            <div className="comparison-header">
              <div className="comparison-feature">Feature</div>
              <div className="comparison-us">Custom Web</div>
              <div className="comparison-others">Others</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-feature">24/7 Support</div>
              <div className="comparison-us">✅ Yes</div>
              <div className="comparison-others">❌ Limited</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-feature">Custom Design</div>
              <div className="comparison-us">✅ Fully Custom</div>
              <div className="comparison-others">⚠️ Templates</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-feature">Mobile Responsive</div>
              <div className="comparison-us">✅ Always</div>
              <div className="comparison-others">⚠️ Sometimes</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-feature">SEO Optimized</div>
              <div className="comparison-us">✅ Built-in</div>
              <div className="comparison-others">❌ Extra Cost</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-feature">Free Domain & SSL</div>
              <div className="comparison-us">✅ Included</div>
              <div className="comparison-others">❌ Extra Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta section">
        <div className="container">
          <div className="cta-content card-elevated">
            <h2 className="cta-title">Ready to Experience These Features?</h2>
            <p className="cta-description">
              Get started today and see how our powerful features can transform your online presence.
            </p>
            <div className="cta-actions">
              <Link to="/plans" className="btn btn-secondary">
                View Our Plans
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        .features-page {
          background: #181A20;
          color: #E5E7EB;
          min-height: 100vh;
        }

        /* Hero Section */
        .features-hero {
          padding: 60px 0 30px 0;
          text-align: center;
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
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 2.7rem;
          font-weight: 800;
          margin-bottom: 0.7rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD700, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          color: #A0AEC0;
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
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

        /* Features Grid */
        .features-grid-section {
          padding: 40px 0 20px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .service-card {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1.2rem;
          box-shadow: 0 4px 32px rgba(46,204,113,0.10), 0 1.5px 8px rgba(0,0,0,0.10);
          padding: 2rem 1.3rem 1.5rem 1.3rem;
          transition: transform 0.22s, box-shadow 0.22s, border 0.22s;
          cursor: pointer;
          border: 2.5px solid transparent;
          position: relative;
          backdrop-filter: blur(8px);
          overflow: hidden;
        }

        .service-card:hover, .service-card.active {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 8px 40px rgba(46,204,113,0.18), 0 2px 16px rgba(0,0,0,0.13);
          border: 2.5px solid #2ECC71;
        }

        .service-card::before {
          content: '';
          display: block;
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 6px;
          border-radius: 1.2rem 1.2rem 0 0;
          background: linear-gradient(90deg, #2ECC71, #3498db);
          opacity: 0.7;
        }

        .service-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .service-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          box-shadow: 0 0 16px 4px rgba(46,204,113,0.13);
          background: rgba(46,204,113,0.08);
          filter: blur(0.5px);
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .service-description {
          color: #A0AEC0;
          font-size: 1rem;
          margin-bottom: 0.7rem;
        }

        .service-features {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 0.7rem;
        }

        .service-features.show {
          max-height: 300px;
        }

        .service-features h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .feature-check {
          color: #2ECC71;
          margin-right: 8px;
          font-weight: bold;
        }

        .service-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-highlight,
        .service-card.active .service-highlight {
          transform: scaleX(1);
        }

        /* Benefits Section */
        .benefits-section {
          padding: 40px 0 30px 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          margin-top: 25px;
        }

        .benefit-card {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 1.5rem 1.1rem 1.2rem 1.1rem;
          text-align: center;
          border: 2px solid transparent;
          transition: box-shadow 0.2s, border 0.2s;
          backdrop-filter: blur(8px);
        }

        .benefit-card:hover {
          border: 2px solid #2ECC71;
          box-shadow: 0 4px 18px rgba(46,204,113,0.10);
        }

        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 0.7rem;
        }

        .benefit-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .benefit-description {
          color: #A0AEC0;
          font-size: 0.98rem;
        }

        /* Comparison Section */
        .comparison-section {
          background: #181A20;
        }

        .comparison-table {
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .comparison-header,
        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .comparison-header {
          background: rgba(46, 204, 113, 0.1);
          font-weight: 700;
          color: #2ECC71;
        }

        .comparison-feature {
          color: #E5E7EB;
        }

        .comparison-us {
          color: #2ECC71;
          text-align: center;
        }

        .comparison-others {
          color: #A0AEC0;
          text-align: center;
        }

        /* CTA Section */
        .features-cta {
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
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }

          .benefits-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .hero-stats {
            gap: 2rem;
          }

          .comparison-header,
          .comparison-row {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
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

export default Features; 