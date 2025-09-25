import React, { useState, useEffect } from 'react';
import './Contact.css';

const contactMethods = [
  {
    title: 'Email Us',
    content: 'official.customweb@gmail.com',
    link: 'mailto:official.customweb@gmail.com',
    icon: '📧',
    color: '#667eea'
  },
  {
    title: 'Call Us',
    content: '+91 9027880288',
    link: 'tel:+919027880288',
    icon: '📞',
    color: '#764ba2'
  },
  {
    title: 'WhatsApp',
    content: '+91 9027880288',
    link: 'https://wa.me/919027880288',
    icon: '💬',
    color: '#f093fb'
  },
  {
    title: 'Visit Us',
    content: 'Bihar, Patna, India',
    icon: '📍',
    color: '#4facfe'
  }
];

const features = [
  {
    title: 'Quick Response',
    description: 'We respond to all inquiries within 2 hours during business hours',
    icon: '⚡'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to help you with any questions',
    icon: '🛠️'
  },
  {
    title: 'Free Consultation',
    description: 'Get a free consultation to discuss your project requirements',
    icon: '💡'
  }
];

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulate form submission
    setTimeout(() => {
      setMessage('Thank you for your message! We\'ll get back to you soon.');
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature.title} className={`feature-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Get in touch with us through any of these channels
            </p>
          </div>
          
          <div className="contact-grid">
            {/* Contact Methods */}
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={method.title} className={`contact-method-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="method-icon" style={{ backgroundColor: `${method.color}20`, color: method.color }}>
                    <span>{method.icon}</span>
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">{method.title}</h3>
                    {method.link ? (
                      <a href={method.link} className="method-link" target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {method.content}
                      </a>
                    ) : (
                      <p className="method-text">{method.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className={`form-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="form-header">
                  <h3 className="form-title">Send Us a Message</h3>
                  <p className="form-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
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
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this about?"
                      value={form.subject}
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
                      placeholder="Tell us about your project or inquiry"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-textarea"
                    ></textarea>
                  </div>
                  
                  {message && (
                    <div className={`message ${message.includes('Thank you') ? 'success' : 'error'}`}>
                      {message}
                    </div>
                  )}
                  
                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="btn-icon">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <div className="map-card">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM2LjAiTiA3MsKwNTInNDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Custom Web Location"
              ></iframe>
            </div>
            <div className="map-info">
              <h3>Our Location</h3>
              <p>Mumbai, Maharashtra, India</p>
              <p>We serve clients worldwide with our remote development services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="cta-actions">
              <a href="mailto:official.customweb@gmail.com" className="btn btn-primary">
                Email Us Now
                <span className="btn-icon">→</span>
              </a>
              <a href="tel:+919876543210" className="btn btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;