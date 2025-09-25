import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeOption, setSubscribeOption] = useState('subscribe');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setNewsletterMsg('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setNewsletterMsg('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (subscribeOption === 'subscribe') {
        setNewsletterMsg('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        setNewsletterMsg('You have been unsubscribed from our newsletter.');
        setEmail('');
      }
    } catch (error) {
      setNewsletterMsg('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">

      <div className="footer-background">
        <div className="footer-gradient"></div>
        <div className="footer-pattern"></div>
      </div>

      <div className="footer-content">

        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo" title="Bihar IT Solution">
                <span className="logo-icon">🌐</span>
                <span className="logo-text">BIS</span>
              </div>
              <p className="company-description">
                We create amazing digital experiences with modern web technologies. 
                From responsive websites to custom applications, we help businesses 
                grow online with innovative solutions.
              </p>
              <div className="social-links" aria-label="Social media links">
                <a href="#" className="social-link" aria-label="Facebook" title="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter" title="Twitter/X">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn" title="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram" title="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub" title="GitHub">
                  <span>🐙</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/services" className="footer-link">Our Services</Link></li>
                <li><Link to="/features" className="footer-link">Features</Link></li>
                <li><Link to="/team" className="footer-link">Our Team</Link></li>
                <li><Link to="/plans" className="footer-link">Pricing Plans</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><Link to="/services" className="footer-link">Web Design & Development</Link></li>
                <li><Link to="/services" className="footer-link">E-commerce Solutions</Link></li>
                <li><Link to="/services" className="footer-link">Custom Web Applications</Link></li>
                <li><Link to="/services" className="footer-link">Mobile-First Design</Link></li>
                <li><Link to="/services" className="footer-link">SEO Optimization</Link></li>
                <li><Link to="/services" className="footer-link">24/7 Support & Maintenance</Link></li>
                <li><Link to="/services" className="footer-link">Performance Optimization</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <span className="contact-label">Address</span>
                    <span className="contact-value">Bihar, Patna, India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:official.customweb@gmail.com" className="contact-value">official.customweb@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+919876543210" className="contact-value">+91 9027880288</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <div className="contact-details">
                    <span className="contact-label">Working Hours</span>
                    <span className="contact-value">Mon - Fri: 11AM - 4PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <div className="newsletter-text">
                <h3 className="newsletter-title">Stay Updated</h3>
                <p className="newsletter-description">
                  Subscribe to our newsletter for the latest updates, tips, and insights 
                  about web development and digital solutions.
                </p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                    aria-label="Enter your email address"
                    />
                  <button type="submit" className="newsletter-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="spinner" aria-label="Loading" role="status"></span>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </div>
                <div className="newsletter-options" aria-label="Subscription options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="subscribeOption"
                      value="subscribe"
                      checked={subscribeOption === 'subscribe'}
                      onChange={(e) => setSubscribeOption(e.target.value)}
                      aria-label="Subscribe to our newsletter"
                    />
                    <span className="radio-custom"></span>
                    <span>Subscribe</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="subscribeOption"
                      value="unsubscribe"
                      checked={subscribeOption === 'unsubscribe'}
                      onChange={(e) => setSubscribeOption(e.target.value)}
                      aria-label="Unsubscribe from our newsletter"
                    />
                    <span className="radio-custom"></span>
                    <span>Unsubscribe</span>
                  </label>
                </div>
                {newsletterMsg && (
                  <div className={`newsletter-message ${newsletterMsg.includes('Thank you') || newsletterMsg.includes('unsubscribed') ? 'success' : 'error'}`} role="status" aria-live="polite">
                    {newsletterMsg}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};
export default Footer;