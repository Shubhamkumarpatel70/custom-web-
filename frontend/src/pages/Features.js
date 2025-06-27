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
      <section className="features-grid-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">
              Comprehensive features designed to give you the best web development experience
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`feature-card card ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                <div className="feature-header">
                  <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                    <span>{feature.icon}</span>
                  </div>
                  <div className="feature-expand">
                    <span className={`expand-icon ${activeFeature === index ? 'active' : ''}`}>+</span>
                  </div>
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title" style={{ color: feature.color }}>
                    {feature.title}
                  </h3>
                  <p className="feature-description">{feature.desc}</p>
                  
                  <div className={`feature-details ${activeFeature === index ? 'show' : ''}`}>
                    <h4>Includes:</h4>
                    <ul>
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>
                          <span className="detail-check" style={{ color: feature.color }}>✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="feature-highlight" style={{ background: feature.color }}></div>
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
          min-height: 100vh;
        }

        /* Hero Section */
        .features-hero {
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

        /* Features Grid */
        .features-grid-section {
          background: #181A20;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .feature-card {
          position: relative;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-card.active {
          border-color: #2ECC71;
          box-shadow: 0 10px 30px rgba(46, 204, 113, 0.2);
        }

        .feature-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .feature-expand {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(46, 204, 113, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .expand-icon {
          color: #2ECC71;
          font-size: 1.25rem;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .expand-icon.active {
          transform: rotate(45deg);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #A0AEC0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .feature-details.show {
          max-height: 200px;
        }

        .feature-details h4 {
          color: #E5E7EB;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .feature-details ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-details li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          color: #A0AEC0;
          font-size: 0.875rem;
        }

        .detail-check {
          font-weight: 700;
        }

        .feature-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-highlight,
        .feature-card.active .feature-highlight {
          transform: scaleX(1);
        }

        /* Benefits Section */
        .benefits-section {
          background: #23272F;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          text-align: center;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .benefit-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .benefit-description {
          color: #A0AEC0;
          line-height: 1.6;
          margin: 0;
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
          .features-grid {
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
          .features-grid {
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