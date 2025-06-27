import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text">CUSTOM WEB</span>
              </div>
              <p className="footer-description">
                Creating innovative digital solutions that help businesses grow online with modern, responsive websites.
              </p>
              <div className="footer-contact">
                <a href="mailto:official.customweb@gmail.com" className="contact-link">
                  📧 official.customweb@gmail.com
                </a>
                <div className="contact-location">
                  📍 Roorkee, Uttarakhand, INDIA
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/services" className="footer-link">Services</Link>
                <Link to="/features" className="footer-link">Features</Link>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <div className="footer-links">
                <Link to="/plans" className="footer-link">Plans</Link>
                <Link to="/team" className="footer-link">Our Team</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/login" className="footer-link">Login</Link>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="footer-section">
              <h4 className="footer-title">Stay Connected</h4>
              <p className="newsletter-text">
                Get updates on our latest projects and web development tips.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {currentYear} <span className="brand-name">CUSTOM WEB</span>. All Rights Reserved.
            </div>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Styles */}
      <style jsx>{`
        .modern-footer {
          background: linear-gradient(135deg, #181A20 0%, #23272F 100%);
          border-top: 1px solid rgba(46, 204, 113, 0.2);
          color: #E5E7EB;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(2rem, 5vw, 3rem);
          padding: clamp(2rem, 6vw, 4rem) 0;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          margin-bottom: 1rem;
        }

        .logo-text {
          font-weight: 800;
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          background: linear-gradient(135deg, #2ECC71, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .footer-description {
          color: #A0AEC0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-link {
          color: #2ECC71;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-link:hover {
          color: #FF6B35;
          transform: translateX(5px);
        }

        .contact-location {
          color: #A0AEC0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-title {
          color: #E5E7EB;
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(135deg, #2ECC71, #FF6B35);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: #A0AEC0;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
        }

        .footer-link:hover {
          color: #2ECC71;
          padding-left: 10px;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -15px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: -10px;
        }

        .newsletter-text {
          color: #A0AEC0;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(46, 204, 113, 0.1);
          border: 1px solid rgba(46, 204, 113, 0.2);
          border-radius: 50%;
          text-decoration: none;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #2ECC71;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: #A0AEC0;
          font-size: 0.875rem;
        }

        .brand-name {
          color: #2ECC71;
          font-weight: 700;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .legal-link {
          color: #A0AEC0;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #2ECC71;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer-legal {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default Footer; 