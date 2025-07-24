import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterMsg('');
    setNewsletterLoading(true);
    try {
      const res = await axios.post('/api/auth/newsletter/subscribe', { email: newsletterEmail });
      setNewsletterMsg('Subscribed successfully!');
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterMsg(err.response?.data?.message || 'Could not subscribe.');
    }
    setNewsletterLoading(false);
  };

  return (
    <>
      <footer className="modern-footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <span className="logo-text">CUSTOM WEB</span>
              </div>
              <p className="footer-description">
                Creating innovative digital solutions that help businesses grow online with modern, responsive websites.
              </p>
              <div className="footer-contact">
                <a href="mailto:official.customweb@gmail.com" className="contact-link">
                  <svg className="contact-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                  </svg>
                  official.customweb@gmail.com
                </a>
                <div className="contact-location">
                  <svg className="contact-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
                  </svg>
                  Roorkee, Uttarakhand, INDIA
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <nav className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/services" className="footer-link">Services</Link>
                <Link to="/features" className="footer-link">Features</Link>
              </nav>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <nav className="footer-links">
                <Link to="/plans" className="footer-link">Plans</Link>
                <Link to="/team" className="footer-link">Our Team</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/login" className="footer-link">Login</Link>
              </nav>
            </div>

            {/* Newsletter & Social */}
            <div className="footer-section newsletter">
              <h4 className="footer-title">Stay Connected</h4>
              <p className="newsletter-text">
                Get updates on our latest projects and web development tips.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input" 
                  required 
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  disabled={newsletterLoading}
                />
                <button type="submit" className="newsletter-button" disabled={newsletterLoading}>
                  {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {newsletterMsg && (
                <div style={{ color: newsletterMsg.includes('success') ? '#2ECC71' : '#FF6B35', marginTop: '0.5rem', fontWeight: 600 }}>
                  {newsletterMsg}
                </div>
              )}
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {currentYear} <span className="brand-name">CUSTOM WEB</span>. All Rights Reserved.
            </div>
            <nav className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
              <Link to="/cookies" className="legal-link">Cookie Policy</Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Footer Styles */}
      <style jsx>{`
        :root {
          --primary: #6366f1;
          --primary-dark: #4f46e5;
          --secondary: #06b6d4;
          --accent: #f59e0b;
          --dark: #1e293b;
          --light: #f8fafc;
          --gray: #94a3b8;
          --dark-bg: #0f172a;
          --dark-border: #1e293b;
        }
        
        .modern-footer {
          background: var(--dark-bg);
          color: var(--light);
          padding: 4rem 0 0;
          border-top: 1px solid var(--dark-border);
          font-family: 'Inter', system-ui, sans-serif;
        }
        
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-section {
          margin-bottom: 2rem;
        }
        
        .company-info {
          max-width: 300px;
        }
        
        .footer-logo .logo-text {
          font-weight: 800;
          font-size: 1.5rem;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .footer-description {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .footer-title {
          color: var(--light);
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 2rem;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: var(--gray);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-link:hover {
          color: var(--secondary);
          transform: translateX(4px);
        }
        
        .footer-link::before {
          content: '→';
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover::before {
          opacity: 1;
        }
        
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        
        .contact-link, .contact-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover, .contact-location:hover {
          color: var(--secondary);
        }
        
        .contact-icon {
          flex-shrink: 0;
        }
        
        .newsletter {
          max-width: 300px;
        }
        
        .newsletter-text {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .newsletter-input {
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          border: 1px solid var(--dark-border);
          background: rgba(255, 255, 255, 0.05);
          color: var(--light);
          transition: all 0.3s ease;
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }
        
        .newsletter-input::placeholder {
          color: var(--gray);
        }
        
        .newsletter-button {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--gray);
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          border-top: 1px solid var(--dark-border);
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .footer-copyright {
          color: var(--gray);
          font-size: 0.875rem;
          text-align: center;
        }
        
        .brand-name {
          color: var(--primary);
          font-weight: 600;
        }
        
        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }
        
        .legal-link {
          color: var(--gray);
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .legal-link:hover {
          color: var(--secondary);
        }
        
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-legal {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;