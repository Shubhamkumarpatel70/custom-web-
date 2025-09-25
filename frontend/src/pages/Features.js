import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const defaultFeatures = [
  {
    title: 'Responsive Design',
    desc: 'Mobile-first approach ensuring your website looks perfect on all devices.',
    icon: '📱',
    color: '#667eea',
    details: ['Mobile Optimized', 'Tablet Friendly', 'Desktop Perfect', 'Cross-Browser Compatible']
  },
  {
    title: 'SEO Optimization',
    desc: 'Built-in SEO features to help your website rank higher in search engines.',
    icon: '🔍',
    color: '#764ba2',
    details: ['Meta Tags', 'Schema Markup', 'Fast Loading', 'Clean URLs']
  },
  {
    title: 'Security Features',
    desc: 'Advanced security measures to protect your website and user data.',
    icon: '🔒',
    color: '#f093fb',
    details: ['SSL Certificate', 'Data Encryption', 'Regular Backups', 'Security Monitoring']
  },
  {
    title: 'Performance Optimization',
    desc: 'Lightning-fast loading speeds for better user experience and SEO.',
    icon: '⚡',
    color: '#4facfe',
    details: ['CDN Integration', 'Image Optimization', 'Code Minification', 'Caching']
  },
  {
    title: 'Content Management',
    desc: 'Easy-to-use CMS to manage your website content without technical knowledge.',
    icon: '📝',
    color: '#43e97b',
    details: ['User-Friendly Admin', 'Media Library', 'Content Editor', 'Role Management']
  },
  {
    title: 'Analytics Integration',
    desc: 'Built-in analytics to track your website performance and user behavior.',
    icon: '📊',
    color: '#fa709a',
    details: ['Google Analytics', 'Conversion Tracking', 'User Insights', 'Performance Reports']
  },
  {
    title: 'E-commerce Ready',
    desc: 'Complete e-commerce functionality for online stores and businesses.',
    icon: '🛒',
    color: '#ff9a9e',
    details: ['Payment Gateway', 'Inventory Management', 'Order Processing', 'Shopping Cart']
  },
  {
    title: '24/7 Support',
    desc: 'Round-the-clock support to help you with any questions or issues.',
    icon: '🛠️',
    color: '#a8edea',
    details: ['Live Chat', 'Email Support', 'Phone Support', 'Knowledge Base']
  },
  {
    title: 'Custom Development',
    desc: 'Tailored solutions to meet your specific business requirements.',
    icon: '⚙️',
    color: '#fed6e3',
    details: ['Custom Features', 'API Integration', 'Third-party Tools', 'Scalable Architecture']
  }
];

const benefits = [
  {
    title: 'Quality Assurance',
    desc: 'Rigorous testing and quality checks ensure your website works flawlessly.',
    icon: '✅',
    color: '#667eea'
  },
  {
    title: 'Fast Delivery',
    desc: 'Quick turnaround times without compromising on quality or features.',
    icon: '🚀',
    color: '#764ba2'
  },
  {
    title: 'Affordable Pricing',
    desc: 'Competitive pricing with transparent costs and no hidden fees.',
    icon: '💰',
    color: '#f093fb'
  },
  {
    title: 'Ongoing Support',
    desc: 'Continuous support and maintenance to keep your website running smoothly.',
    icon: '🔄',
    color: '#4facfe'
  }
];

const comparison = [
  {
    feature: 'Responsive Design',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'SEO Optimization',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'Security Features',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'Performance Optimization',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'Content Management',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'Analytics Integration',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'E-commerce Ready',
    customWeb: true,
    competitors: false
  },
  {
    feature: '24/7 Support',
    customWeb: true,
    competitors: false
  },
  {
    feature: 'Custom Development',
    customWeb: true,
    competitors: false
  }
];

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [features] = useState(defaultFeatures);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="features-page">
      {/* Features Grid */}
      <section className="features-section">
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
                className={`feature-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-header">
                  <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                    <span>{feature.icon}</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title" style={{ color: feature.color }}>
                    {feature.title}
                  </h3>
                  <p className="feature-description">{feature.desc}</p>
                  <div className="feature-details">
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
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Custom Web</h2>
            <p className="section-subtitle">
              The advantages that set us apart in the web development industry
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className={`benefit-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon" style={{ background: `${benefit.color}20`, color: benefit.color }}>
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
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Compare</h2>
            <p className="section-subtitle">
              See how our comprehensive features stack up against the competition
            </p>
          </div>
          <div className="comparison-table">
            <div className="table-header">
              <div className="feature-header">Feature</div>
              <div className="custom-web-header">Custom Web</div>
              <div className="competitors-header">Competitors</div>
            </div>
            <div className="table-body">
              {comparison.map((item, index) => (
                <div key={index} className="table-row">
                  <div className="feature-name">{item.feature}</div>
                  <div className="custom-web-cell">
                    {item.customWeb ? <span className="check">✓</span> : <span className="cross">✗</span>}
                  </div>
                  <div className="competitors-cell">
                    {item.competitors ? <span className="check">✓</span> : <span className="cross">✗</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience These Features?</h2>
            <p className="cta-description">
              Get started with Custom Web and enjoy all these powerful features for your website.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;