import React, { useState } from 'react';
import axios from '../axios';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await axios.post('/api/auth/contact', form);
      setMessage('Your message has been sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setMessage('Could not send your message.');
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="hero-subtitle">
                Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">&lt; 2hrs</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">
                  Get in touch with us through any of these channels
                </p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Address</h3>
                      <p>Roorkee, Uttarakhand, INDIA</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Phone</h3>
                      <a href="tel:+919027880288" className="contact-link">
                        +91 9027880288
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Email</h3>
                      <a href="mailto:official.customweb@gmail.com" className="contact-link">
                        official.customweb@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Business Hours</h3>
                      <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="map-container">
                  <iframe
                    title="Custom Web Location"
                    src="https://www.google.com/maps?q=Roorkee,+Uttarakhand,+India&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <h2 className="form-title">Send Us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                  />
                </div>
                
                <button type="submit" className={`submit-btn ${loading ? 'loading' : ''}`} disabled={loading}>
                  {loading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="btn-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </>
                  )}
                </button>
                
                {message && (
                  <div className={`form-message ${message.includes('sent') ? 'success' : 'error'}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity, but most websites are completed within 2-4 weeks.</p>
            </div>
            <div className="faq-item">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! We offer 24/7 support and maintenance services to keep your website running smoothly.</p>
            </div>
            <div className="faq-item">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>What's included in your web development service?</h3>
              <p>We provide complete web development including design, development, hosting, domain, and SSL certificate.</p>
            </div>
            <div className="faq-item">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Can you help with existing websites?</h3>
              <p>Absolutely! We can help improve, redesign, or fix issues with your existing website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        .contact-page {
          background: #f9fafb;
          color: #111827;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Hero Section */
        .contact-hero {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
          overflow: hidden;
          padding: 4rem 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          color: white;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #10b981);
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
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          opacity: 0.8;
          color: #e5e7eb;
        }

        /* Contact Section */
        .contact-section {
          padding: 5rem 0;
          background: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        /* Contact Information */
        .info-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 2.5rem;
          height: 100%;
          border: 1px solid #e5e7eb;
        }

        .info-title {
          color: #1e40af;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .info-subtitle {
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .method-icon {
          width: 48px;
          height: 48px;
          background: #eff6ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #3b82f6;
        }

        .method-icon svg {
          width: 20px;
          height: 20px;
        }

        .method-content h3 {
          color: #111827;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
        }

        .method-content p {
          color: #6b7280;
          margin: 0;
          font-size: 0.9375rem;
          line-height: 1.5;
        }

        .contact-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        .map-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
        }

        /* Contact Form */
        .contact-form {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 2.5rem;
          border: 1px solid #e5e7eb;
        }

        .form-title {
          color: #1e40af;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .form-subtitle {
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.9375rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          color: #111827;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover {
          background: linear-gradient(90deg, #2563eb, #1d4ed8);
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          background: #9ca3af;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .btn-arrow svg {
          transition: transform 0.2s ease;
        }

        .submit-btn:hover .btn-arrow svg {
          transform: translateX(3px);
        }

        .form-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          font-size: 0.9375rem;
        }

        .form-message.success {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
        }

        .form-message.error {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fca5a5;
        }

        /* FAQ Section */
        .contact-faq {
          padding: 5rem 0;
          background: #f9fafb;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .section-title {
          color: #111827;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: #6b7280;
          line-height: 1.6;
          font-size: 1.125rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .faq-item {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .faq-icon {
          width: 48px;
          height: 48px;
          background: #eff6ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: #3b82f6;
        }

        .faq-icon svg {
          width: 20px;
          height: 20px;
        }

        .faq-item h3 {
          color: #111827;
          margin-bottom: 1rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .faq-item p {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
          font-size: 0.9375rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-grid {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            gap: 2rem;
          }

          .contact-hero {
            min-height: 450px;
          }
        }

        @media (max-width: 640px) {
          .contact-hero {
            padding: 3rem 0;
          }

          .contact-section, .contact-faq {
            padding: 3rem 0;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .info-card, .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;