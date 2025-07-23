import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Business Owner',
    quote: 'Custom Web delivered our website on time and exceeded our expectations. Their support is top-notch!',
    color: '#2ECC71',
  },
  {
    name: 'Priya Singh',
    role: 'Educator',
    quote: 'The education website they built for us is modern, fast, and easy to use. Highly recommended!',
    color: '#0057D9',
  },
  {
    name: 'Rahul Verma',
    role: 'Startup Founder',
    quote: 'Professional, creative, and reliable. Custom Web is our go-to for all web solutions.',
    color: '#FF6B35',
  },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="hero-text">
              <h1 className="hero-title">
                Creative & Innovative 
                <span className="gradient-text"> Digital Solutions</span>
              </h1>
              <p className="hero-subtitle">
                We design and develop custom websites to help your business grow online with modern, responsive, and user-friendly solutions.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-primary hero-cta">
                  Get Started
                  <span className="btn-icon">→</span>
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Projects Done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Custom Web?</h2>
            <p className="section-subtitle">
              We deliver exceptional digital solutions that drive results
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card card animate-fade-in-up">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,18V10H17V18H7Z" />
                  </svg>
                </div>
              </div>
              <h3 className="feature-title">Custom Web Design</h3>
              <p className="feature-description">
                Modern, responsive, and tailored to your business needs with cutting-edge design principles.
              </p>
            </div>
            <div className="feature-card card animate-fade-in-up">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.2V15.7C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                  </svg>
                </div>
              </div>
              <h3 className="feature-title">Secure & Reliable</h3>
              <p className="feature-description">
                We use the latest technologies and security practices to keep your site safe and fast.
              </p>
            </div>
            <div className="feature-card card animate-fade-in-up">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" />
                  </svg>
                </div>
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">
                Our dedicated team is always here to help you with any questions or technical issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions for your business growth
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card card-elevated">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z" />
                  </svg>
                </div>
                <h3>Web Design & Development</h3>
              </div>
              <p>Custom websites built with modern technologies and responsive design principles.</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card card-elevated">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19,18H5A2,2 0 0,1 3,16V6A2,2 0 0,1 5,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18M5,6V16H19V6H5M7,15H17V17H7V15M17,10H7V12H17V10Z" />
                  </svg>
                </div>
                <h3>Mobile-First Approach</h3>
              </div>
              <p>Optimized for all devices with seamless user experience across platforms.</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card card-elevated">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M5,16L3,5L8.5,12L12,5L15.5,12L21,5L19,16H5M19,19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V18H19V19Z" />
                  </svg>
                </div>
                <h3>Cloud Solutions</h3>
              </div>
              <p>Scalable, secure, and reliable cloud-based web solutions for your business.</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card card-elevated">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" />
                  </svg>
                </div>
                <h3>Security & Support</h3>
              </div>
              <p>24/7 support and best-in-class security for peace of mind.</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from businesses that have transformed their online presence
            </p>
          </div>
          <div className="testimonial-slider">
            <button onClick={prev} aria-label="Previous" className="testimonial-arrow left-arrow">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
            </button>
            <div className="testimonial-card" style={{ borderColor: testimonials[current].color }}>
              <div className="testimonial-quote" style={{ color: testimonials[current].color }}>“</div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonials[current].quote}</p>
                <div className="testimonial-author">
                  <span className="author-name" style={{ color: testimonials[current].color }}>{testimonials[current].name}</span>
                  <span className="author-role">{testimonials[current].role}</span>
                </div>
              </div>
            </div>
            <button onClick={next} aria-label="Next" className="testimonial-arrow right-arrow">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Transform Your Online Presence?</h2>
            <p className="cta-text">Let's build something amazing together. Get in touch with our team today.</p>
            <Link to="/contact" className="btn-primary cta-button">
              Get Started
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        :root {
          --primary: #5A31F4;
          --primary-light: #7C5AFA;
          --secondary: #00C4CC;
          --accent: #FFB400;
          --dark: #222;
          --light: #F7F8FA;
          --white: #FFFFFF;
          --gray: #6B7280;
          --light-gray: #E5E7EB;
        }

        /* Base Styles */
        .home-page {
          background: var(--light);
          color: var(--dark);
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

        /* Typography */
        h1, h2, h3, h4 {
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1rem 0;
        }

        p {
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: var(--white);
          font-weight: 600;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(90, 49, 244, 0.1);
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(90, 49, 244, 0.15);
          background: linear-gradient(135deg, var(--primary-light), var(--primary));
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2rem;
          background: transparent;
          color: var(--primary);
          font-weight: 600;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid var(--primary);
          cursor: pointer;
        }

        .btn-outline:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-2px);
        }

        .btn-icon {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(4px);
        }

        /* Cards */
        .card {
          background: var(--white);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .card-elevated {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.25rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--gray);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
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
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
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
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
        }

        .hero-text {
          max-width: 800px;
          margin-bottom: 3rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(90deg, var(--accent), var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          margin-bottom: 2.5rem;
          color: var(--white);
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: clamp(2rem, 6vw, 4rem);
          flex-wrap: wrap;
          margin-top: 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: var(--white);
          opacity: 0.9;
        }

        /* Features Section */
        .features-section {
          background: var(--light);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid var(--light-gray);
        }

        .feature-icon {
          margin-bottom: 1.5rem;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(90, 49, 244, 0.1);
          border-radius: 50%;
          color: var(--primary);
        }

        .feature-title {
          font-size: 1.25rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .feature-description {
          color: var(--gray);
        }

        /* Services Section */
        .services-preview-section {
          background: var(--white);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 2rem;
          border: 1px solid var(--light-gray);
          display: flex;
          flex-direction: column;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(90, 49, 244, 0.1);
          border-radius: 1rem;
          color: var(--primary);
        }

        .service-header h3 {
          font-size: 1.25rem;
          color: var(--dark);
          margin: 0;
        }

        .service-card p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-link {
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: var(--accent);
          transform: translateX(5px);
        }

        /* Testimonials Section */
        .testimonials-section {
          background: var(--light);
        }

        .testimonial-slider {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: var(--white);
          border-radius: 1rem;
          padding: 3rem 2rem;
          text-align: center;
          width: 100%;
          max-width: 600px;
          border: 2px solid;
          position: relative;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .testimonial-quote {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 1rem;
          opacity: 0.2;
          position: absolute;
          top: 1rem;
          left: 2rem;
        }

        .testimonial-text {
          font-size: 1.125rem;
          font-style: italic;
          color: var(--dark);
          margin-bottom: 2rem;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .author-role {
          color: var(--gray);
          font-size: 0.875rem;
        }

        .testimonial-arrow {
          background: var(--white);
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          color: var(--primary);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }

        .testimonial-arrow:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-50%) scale(1.1);
        }

        .left-arrow {
          left: -24px;
        }

        .right-arrow {
          right: -24px;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--light-gray);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: var(--white);
        }

        .cta-card {
          background: var(--white);
          border-radius: 1rem;
          padding: 3rem 2rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .cta-title {
          font-size: 1.75rem;
          color: var(--dark);
          margin-bottom: 1rem;
        }

        .cta-text {
          color: var(--gray);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          margin-top: 1rem;
        }

        /* Animations */
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section {
            padding: 3rem 0;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary, .btn-outline {
            width: 100%;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
          }

          .testimonial-arrow {
            width: 40px;
            height: 40px;
          }

          .left-arrow {
            left: -10px;
          }

          .right-arrow {
            right: -10px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .testimonial-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;