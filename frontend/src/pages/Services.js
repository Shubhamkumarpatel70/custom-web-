import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  // ... (keep your existing services array)
];

const process = [
  // ... (keep your existing process array)
];

const technologies = [
  // ... (keep your existing technologies array)
];

function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="hero-subtitle">
              We provide comprehensive web development solutions tailored to your business needs. From simple websites to complex web applications.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Service Types</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Professional web development services to help your business grow online
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.title} className="service-card card animate-fade-in-up">
                <div className="service-header">
                  <div className="service-icon" style={{ background: `${service.color}20`, color: service.color }}>
                    <span>{service.icon}</span>
                  </div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="service-description">{service.desc}</p>
                  
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check" style={{ color: service.color }}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                </div>

                <div className="service-highlight" style={{ background: service.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              How we work to deliver exceptional results for your project
            </p>
          </div>
          <div className="process-timeline">
            {process.map((step, index) => (
              <div key={step.step} className="process-item">
                <div className="process-number">
                  <span>{step.step}</span>
                </div>
                <div className="process-content card">
                  <div className="process-icon">
                    <span>{step.icon}</span>
                  </div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">
              Modern tools and frameworks to build robust, scalable solutions
            </p>
          </div>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="tech-item card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  <span>{tech.icon}</span>
                </div>
                <h4 className="tech-name">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-content card-elevated">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Free Quote
              </Link>
              <Link to="/plans" className="btn btn-outline">
                View Our Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        :root {
          --primary-color: #0057D9;
          --secondary-color: #2ECC71;
          --accent-color: #FF6B35;
          --dark-bg: #181A20;
          --medium-bg: #23272F;
          --light-text: #E5E7EB;
          --gray-text: #A0AEC0;
          --card-bg: rgba(30, 34, 42, 0.8);
          --card-border: rgba(255, 255, 255, 0.1);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .services-page {
          background: var(--dark-bg);
          color: var(--light-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
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

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: var(--gray-text);
          font-size: clamp(1rem, 2vw, 1.125rem);
          max-width: 700px;
          margin: 0 auto;
        }

        .card {
          background: var(--card-bg);
          border-radius: 16px;
          border: 1px solid var(--card-border);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .card-elevated {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: var(--primary-color);
          color: white;
        }

        .btn-primary:hover {
          background: #0047b8;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: var(--light-text);
          border-color: var(--light-text);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Hero Section */
        .services-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 4rem 0;
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
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
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
          color: var(--light-text);
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
          background: linear-gradient(135deg, #FFD700, var(--accent-color));
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
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          min-width: 100px;
        }

        .stat-number {
          display: block;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          opacity: 0.8;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          position: relative;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .service-header {
          margin-bottom: 1.5rem;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-content {
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .service-description {
          color: var(--gray-text);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features h4 {
          color: var(--light-text);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          color: var(--gray-text);
          font-size: 0.875rem;
        }

        .feature-check {
          font-weight: 700;
        }

        .service-footer {
          margin-top: auto;
          padding-top: 1rem;
        }

        .service-price {
          font-weight: 600;
          color: var(--light-text);
          font-size: 0.95rem;
        }

        .service-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-highlight {
          transform: scaleX(1);
        }

        /* Process Section */
        .process-section {
          background: var(--medium-bg);
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .process-item {
          position: relative;
          text-align: center;
        }

        .process-number {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          z-index: 2;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .process-content {
          padding: 3rem 1.5rem 2rem;
          height: 100%;
        }

        .process-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .process-title {
          color: var(--light-text);
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .process-description {
          color: var(--gray-text);
          line-height: 1.6;
          margin: 0;
        }

        /* Technologies Section */
        .technologies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.5rem;
        }

        .tech-item {
          text-align: center;
          padding: 1.5rem 1rem;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .tech-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .tech-name {
          color: var(--light-text);
          font-size: 1rem;
          margin: 0;
        }

        /* CTA Section */
        .services-cta {
          background: linear-gradient(135deg, var(--medium-bg), var(--dark-bg));
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 87, 217, 0.1));
          border: 1px solid rgba(46, 204, 113, 0.2);
          border-radius: 16px;
        }

        .cta-title {
          margin-bottom: 1rem;
          color: var(--light-text);
          font-size: clamp(1.5rem, 3vw, 2rem);
        }

        .cta-description {
          color: var(--gray-text);
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
        @media (max-width: 768px) {
          .section {
            padding: 3rem 0;
          }

          .hero-stats {
            gap: 1.5rem;
          }

          .process-timeline {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .process-item {
            margin-bottom: 2rem;
          }

          .process-number {
            top: -1.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 1.5rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Services;