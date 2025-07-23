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
          <div className="services-grid">
            {features.map((feature, index) => (
              <div key={feature.title} className="service-card card animate-fade-in-up">
                <div className="service-header">
                  <div className="service-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                    <span>{feature.icon}</span>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title" style={{ color: feature.color }}>
                    {feature.title}
                  </h3>
                  <p className="service-description">{feature.desc}</p>
                  <div className="service-features">
                    <h4>Includes:</h4>
                    <ul>
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>
                          <span className="feature-check" style={{ color: feature.color }}>✓</span>
                          <span>{detail}</span>
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
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section {
          padding: 5rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #E5E7EB, #A0AEC0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: #A0AEC0;
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Hero Section */
        .features-hero {
          padding: 6rem 0 4rem 0;
          position: relative;
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
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD700, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          color: #A0AEC0;
          font-size: clamp(1rem, 2vw, 1.25rem);
          margin-bottom: 2.5rem;
          line-height: 1.6;
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
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .service-card {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1rem;
          box-shadow: 0 4px 32px rgba(46,204,113,0.10), 0 1.5px 8px rgba(0,0,0,0.10);
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 40px rgba(46,204,113,0.18), 0 2px 16px rgba(0,0,0,0.13);
          border-color: #2ECC71;
        }

        .service-header {
          margin-bottom: 1rem;
        }

        .service-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 0 16px 4px rgba(46,204,113,0.13);
          background: rgba(46,204,113,0.08);
        }

        .service-content {
          text-align: left;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .service-description {
          color: #A0AEC0;
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .service-features h4 {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          color: #E5E7EB;
        }

        .service-features ul {
          padding-left: 1.25rem;
          margin: 0;
        }

        .service-features li {
          margin-bottom: 0.4rem;
          display: flex;
          align-items: flex-start;
          line-height: 1.4;
        }

        .feature-check {
          margin-right: 0.5rem;
          font-weight: 700;
        }

        .service-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-highlight {
          transform: scaleX(1);
        }

        /* Benefits Section */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .benefit-card {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(46,204,113,0.1);
          border-color: #2ECC71;
        }

        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .benefit-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .benefit-description {
          color: #A0AEC0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Comparison Section */
        .comparison-table {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
        }

        .comparison-header,
        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 1rem;
          padding: 1rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .comparison-header,
          .comparison-row {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 1rem 0.5rem;
          }
          
          .comparison-header div:not(:first-child),
          .comparison-row div:not(:first-child) {
            display: none;
          }
          
          .comparison-row {
            position: relative;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .comparison-row::before {
            content: attr(data-label);
            position: absolute;
            right: 1rem;
            font-weight: bold;
            color: #2ECC71;
          }
          
          .comparison-row:nth-child(odd) {
            background: rgba(255, 255, 255, 0.03);
          }
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
          font-weight: 500;
        }

        .comparison-others {
          color: #A0AEC0;
          text-align: center;
          font-weight: 500;
        }

        /* CTA Section */
        .features-cta {
          background: linear-gradient(135deg, #23272F, #181A20);
          padding: 4rem 0;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 87, 217, 0.1));
          border: 1px solid rgba(46, 204, 113, 0.2);
          border-radius: 1rem;
          padding: 2.5rem 1.5rem;
        }

        .cta-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 1rem;
          color: #E5E7EB;
          font-weight: 700;
        }

        .cta-description {
          color: #A0AEC0;
          margin-bottom: 2rem;
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .btn-secondary {
          background: #2ECC71;
          color: white;
          border: 2px solid #2ECC71;
        }

        .btn-secondary:hover {
          background: #26a35a;
          border-color: #26a35a;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #2ECC71;
          border: 2px solid #2ECC71;
        }

        .btn-outline:hover {
          background: rgba(46, 204, 113, 0.1);
          transform: translateY(-2px);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .section {
            padding: 3rem 0;
          }
          
          .hero-stats {
            gap: 1.5rem;
          }
          
          .services-grid,
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .service-card,
          .benefit-card {
            padding: 1.25rem;
          }
          
          .cta-content {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Features;