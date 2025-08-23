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
              <div className="footer-logo">
                <span className="logo-icon">🌐</span>
                <span className="logo-text">Custom Web</span>
              </div>
              <p className="company-description">
                We create amazing digital experiences with modern web technologies. 
                From responsive websites to custom applications, we help businesses 
                grow online with innovative solutions.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
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
                    <span className="contact-value">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@customweb.com" className="contact-value">info@customweb.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+919876543210" className="contact-value">+91 98765 43210</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <div className="contact-details">
                    <span className="contact-label">Working Hours</span>
                    <span className="contact-value">Mon - Fri: 9AM - 6PM</span>
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
                  />
                  <button type="submit" className="newsletter-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="spinner"></span>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </div>
                <div className="newsletter-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="subscribeOption"
                      value="subscribe"
                      checked={subscribeOption === 'subscribe'}
                      onChange={(e) => setSubscribeOption(e.target.value)}
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
                    />
                    <span className="radio-custom"></span>
                    <span>Unsubscribe</span>
                  </label>
                </div>
                {newsletterMsg && (
                  <div className={`newsletter-message ${newsletterMsg.includes('Thank you') || newsletterMsg.includes('unsubscribed') ? 'success' : 'error'}`}>
                    {newsletterMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} <span className="brand-name">Custom Web</span>. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/cookies" className="footer-bottom-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;