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
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
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
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card card">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">
                  Get in touch with us through any of these channels
                </p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <span>📍</span>
                    </div>
                    <div className="method-content">
                      <h3>Address</h3>
                      <p>Roorkee, Uttarakhand, INDIA</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">
                      <span>📞</span>
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
                      <span>📧</span>
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
                      <span>⏰</span>
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
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form card">
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
                      <span className="btn-arrow">→</span>
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
      <section className="contact-faq section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="faq-grid">
            <div className="faq-item card">
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity, but most websites are completed within 2-4 weeks.</p>
            </div>
            <div className="faq-item card">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! We offer 24/7 support and maintenance services to keep your website running smoothly.</p>
            </div>
            <div className="faq-item card">
              <h3>What's included in your web development service?</h3>
              <p>We provide complete web development including design, development, hosting, domain, and SSL certificate.</p>
            </div>
            <div className="faq-item card">
              <h3>Can you help with existing websites?</h3>
              <p>Absolutely! We can help improve, redesign, or fix issues with your existing website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        .contact-page {
          background: #181A20;
          min-height: 100vh;
        }

        /* Hero Section */
        .contact-hero {
          position: relative;
          min-height: 70vh;
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
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          opacity: 0.8;
        }

        /* Contact Section */
        .contact-section {
          background: #181A20;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 6vw, 4rem);
          align-items: start;
        }

        .info-card {
          padding: 2rem;
          height: 100%;
        }

        .info-title {
          color: #2ECC71;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .info-subtitle {
          color: #A0AEC0;
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
          width: 50px;
          height: 50px;
          background: rgba(46, 204, 113, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .method-content h3 {
          color: #E5E7EB;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .method-content p {
          color: #A0AEC0;
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .contact-link {
          color: #2ECC71;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #FF6B35;
        }

        .map-container {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Contact Form */
        .contact-form {
          padding: 2rem;
        }

        .form-title {
          color: #0057D9;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .form-subtitle {
          color: #A0AEC0;
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
          color: #E5E7EB;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          background: #181A20;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: #E5E7EB;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #2ECC71;
          box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #A0AEC0;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          color: white;
          border: none;
          border-radius: 2rem;
          font-weight: 700;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(46, 204, 113, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
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

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        .form-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 600;
        }

        .form-message.success {
          background: rgba(46, 204, 113, 0.1);
          color: #2ECC71;
          border: 1px solid rgba(46, 204, 113, 0.3);
        }

        .form-message.error {
          background: rgba(255, 107, 53, 0.1);
          color: #FF6B35;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        /* FAQ Section */
        .contact-faq {
          background: #23272F;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .faq-item {
          padding: 1.5rem;
        }

        .faq-item h3 {
          color: #2ECC71;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .faq-item p {
          color: #A0AEC0;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-stats {
            gap: 2rem;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
          }

          .method-icon {
            align-self: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact; 