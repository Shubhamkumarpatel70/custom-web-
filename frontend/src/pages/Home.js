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
            <h1 className="hero-title">
              Creative & Innovative 
              <span className="gradient-text"> Digital Solutions</span>
            </h1>
            <p className="hero-subtitle">
              We design and develop custom websites to help your business grow online with modern, responsive, and user-friendly solutions.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-secondary hero-cta">
                Get Started
                <span className="btn-icon">🚀</span>
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
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
          <div className="features-grid responsive-grid">
            <div className="feature-card card animate-fade-in-up">
              <div className="feature-icon">
                <span className="icon">💡</span>
                <div className="icon-bg"></div>
              </div>
              <h3 className="feature-title">Custom Web Design</h3>
              <p className="feature-description">
                Modern, responsive, and tailored to your business needs with cutting-edge design principles.
              </p>
              <div className="feature-highlight"></div>
            </div>
            <div className="feature-card card animate-fade-in-up">
              <div className="feature-icon">
                <span className="icon">🔒</span>
                <div className="icon-bg"></div>
              </div>
              <h3 className="feature-title">Secure & Reliable</h3>
              <p className="feature-description">
                We use the latest technologies and security practices to keep your site safe and fast.
              </p>
              <div className="feature-highlight"></div>
            </div>
            <div className="feature-card card animate-fade-in-up">
              <div className="feature-icon">
                <span className="icon">🤝</span>
                <div className="icon-bg"></div>
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">
                Our dedicated team is always here to help you with any questions or technical issues.
              </p>
              <div className="feature-highlight"></div>
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
          <div className="services-grid grid-2">
            <div className="service-card card-elevated">
              <div className="service-header">
                <div className="service-icon">🎨</div>
                <h3>Web Design & Development</h3>
              </div>
              <p>Custom websites built with modern technologies and responsive design principles.</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card card-elevated">
              <div className="service-header">
                <div className="service-icon">📱</div>
                <h3>Mobile-First Approach</h3>
              </div>
              <p>Optimized for all devices with seamless user experience across platforms.</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="responsive-section home-testimonials" style={{
        maxWidth: '500px',
        margin: '2.5rem auto 0 auto',
        padding: '2.5rem 1rem',
        background: '#23272F',
        borderRadius: '1.5rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        position: 'relative',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h2 style={{ color: '#2ECC71', fontWeight: 700, fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          What Our Clients Say
        </h2>
        <button onClick={prev} aria-label="Previous" className="testimonial-arrow" style={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#FF6B35',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 2,
        }}>&#8592;</button>
        <div className="responsive-card" style={{
          background: '#181A20',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          padding: '2rem 1.2rem',
          minWidth: '220px',
          maxWidth: '320px',
          color: '#E5E7EB',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          border: `2px solid ${testimonials[current].color}`,
          transition: 'border 0.3s, box-shadow 0.3s',
        }}>
          <div style={{ fontSize: '2.2rem', color: testimonials[current].color, marginBottom: '0.7rem' }}>“</div>
          <div style={{ fontStyle: 'italic', marginBottom: '1.2rem', color: '#E5E7EB' }}>{testimonials[current].quote}</div>
          <div style={{ fontWeight: 700, color: testimonials[current].color }}>{testimonials[current].name}</div>
          <div style={{ color: '#A0AEC0', fontSize: '0.98rem' }}>{testimonials[current].role}</div>
        </div>
        <button onClick={next} aria-label="Next" className="testimonial-arrow" style={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#FF6B35',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 2,
        }}>&#8594;</button>
      </section>
      {/* Modern Styles */}
      <style jsx>{`
        .home-page {
          background: #181A20;
          min-height: 100vh;
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

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .hero-cta {
          position: relative;
          overflow: hidden;
        }

        .btn-icon {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .hero-cta:hover .btn-icon {
          transform: translateX(5px);
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

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: clamp(2rem, 6vw, 4rem);
        }

        .section-title {
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          color: #A0AEC0;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Features Section */
        .features-section {
          background: #181A20;
        }

        .features-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .feature-card {
          position: relative;
          text-align: center;
          overflow: hidden;
        }

        .feature-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
        }

        .icon {
          font-size: 2.5rem;
          z-index: 2;
          position: relative;
        }

        .icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          border-radius: 50%;
          opacity: 0.1;
          transform: scale(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover .icon-bg {
          transform: scale(1);
        }

        .feature-title {
          margin-bottom: 1rem;
          color: #E5E7EB;
        }

        .feature-description {
          color: #A0AEC0;
          line-height: 1.6;
        }

        .feature-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #2ECC71, #FF6B35);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-highlight {
          transform: scaleX(1);
        }

        /* Services Section */
        .services-preview-section {
          background: #23272F;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .service-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          border-radius: 12px;
        }

        .service-header h3 {
          margin: 0;
          color: #E5E7EB;
        }

        .service-card p {
          color: #A0AEC0;
          margin-bottom: 1.5rem;
        }

        .service-link {
          color: #2ECC71;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: #FF6B35;
          transform: translateX(5px);
        }

        /* Testimonials Section */
        .testimonials-section {
          background: #181A20;
        }

        .testimonial-slider {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .testimonial-card {
          max-width: 600px;
          text-align: center;
          position: relative;
        }

        .testimonial-quote {
          margin-bottom: 2rem;
        }

        .quote-mark {
          font-size: 4rem;
          color: #2ECC71;
          opacity: 0.3;
          line-height: 1;
        }

        .testimonial-quote p {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-style: italic;
          color: #E5E7EB;
          margin: 1rem 0;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .author-info {
          text-align: left;
        }

        .author-name {
          margin: 0;
          color: #E5E7EB;
          font-size: 1rem;
        }

        .author-role {
          margin: 0;
          color: #A0AEC0;
          font-size: 0.875rem;
        }

        .testimonial-nav {
          background: rgba(35, 39, 47, 0.8);
          border: 2px solid rgba(46, 204, 113, 0.3);
          color: #2ECC71;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .testimonial-nav:hover {
          background: #2ECC71;
          color: #181A20;
          transform: scale(1.1);
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(46, 204, 113, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #2ECC71;
          transform: scale(1.2);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #23272F, #181A20);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 87, 217, 0.1));
          border: 1px solid rgba(46, 204, 113, 0.2);
        }

        .cta-title {
          margin-bottom: 1rem;
          color: #E5E7EB;
        }

        .cta-description {
          color: #A0AEC0;
          margin-bottom: 2rem;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            gap: 2rem;
          }

          .testimonial-slider {
            flex-direction: column;
            gap: 1rem;
          }

          .testimonial-nav {
            position: static;
            order: 2;
          }

          .testimonial-nav.prev {
            order: 1;
          }

          .testimonial-nav.next {
            order: 3;
          }
        }

        @media (max-width: 600px) {
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-author {
            flex-direction: column;
            text-align: center;
          }

          .author-info {
            text-align: center;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Home; 