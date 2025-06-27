import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Design & Development',
    desc: 'Modern, responsive websites tailored to your brand with cutting-edge technologies.',
    icon: '🖥️',
    color: '#0057D9',
    features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimized', 'Fast Loading'],
    price: 'Starting from ₹15,000'
  },
  {
    title: 'Education Website',
    desc: 'Custom solutions for schools, colleges, and e-learning platforms.',
    icon: '🎓',
    color: '#2ECC71',
    features: ['Student Portal', 'Course Management', 'Online Exams', 'Progress Tracking'],
    price: 'Starting from ₹25,000'
  },
  {
    title: 'Interactive Forms',
    desc: 'Interactive and secure forms for your business needs and data collection.',
    icon: '📝',
    color: '#FF6B35',
    features: ['Custom Fields', 'Data Validation', 'Email Integration', 'Analytics'],
    price: 'Starting from ₹8,000'
  },
  {
    title: 'Client Websites',
    desc: 'Professional websites for your clients and business partners.',
    icon: '👥',
    color: '#9333EA',
    features: ['Client Portal', 'Project Management', 'Communication Tools', 'File Sharing'],
    price: 'Starting from ₹20,000'
  },
  {
    title: 'Custom Solutions',
    desc: 'Fully customized web solutions for any specific requirement.',
    icon: '⚙️',
    color: '#0057D9',
    features: ['Custom Features', 'API Integration', 'Database Design', 'Scalable Architecture'],
    price: 'Quote on Request'
  },
  {
    title: 'Bug Fixing & Maintenance',
    desc: 'Identify and fix bugs to keep your site running smoothly and efficiently.',
    icon: '🔍',
    color: '#FF6B35',
    features: ['Bug Detection', 'Performance Optimization', 'Security Updates', '24/7 Monitoring'],
    price: 'Starting from ₹5,000'
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    desc: 'We understand your requirements and create a detailed project plan.',
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Design & Prototype',
    desc: 'Create wireframes and design mockups for your approval.',
    icon: '🎨'
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Build your website using modern technologies and best practices.',
    icon: '⚡'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    desc: 'Thorough testing and deployment to ensure everything works perfectly.',
    icon: '🚀'
  }
];

const technologies = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'Express', icon: '🚀', color: '#000000' },
  { name: 'HTML5', icon: '🌐', color: '#E34F26' },
  { name: 'CSS3', icon: '🎨', color: '#1572B6' },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
  { name: 'Python', icon: '🐍', color: '#3776AB' }
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
                  <div className="service-price">{service.price}</div>
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
              <Link to="/contact" className="btn btn-secondary">
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
        .services-page {
          background: #181A20;
          min-height: 100vh;
        }

        /* Hero Section */
        .services-hero {
          position: relative;
          min-height: 80vh;
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
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #FFD700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          opacity: 0.8;
        }

        /* Services Grid */
        .services-grid-section {
          background: #181A20;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .service-card {
          position: relative;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
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
        }

        .service-price {
          background: rgba(46, 204, 113, 0.1);
          color: #2ECC71;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .service-content {
          flex: 1;
          margin-bottom: 2rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #A0AEC0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features h4 {
          color: #E5E7EB;
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
          color: #A0AEC0;
          font-size: 0.875rem;
        }

        .feature-check {
          font-weight: 700;
        }

        .service-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-highlight {
          transform: scaleX(1);
        }

        /* Process Section */
        .process-section {
          background: #23272F;
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .process-item {
          position: relative;
          text-align: center;
        }

        .process-number {
          position: absolute;
          top: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          z-index: 2;
        }

        .process-content {
          padding: 3rem 1.5rem 2rem;
          height: 100%;
        }

        .process-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .process-title {
          color: #E5E7EB;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .process-description {
          color: #A0AEC0;
          line-height: 1.6;
          margin: 0;
        }

        /* Technologies Section */
        .technologies-section {
          background: #181A20;
        }

        .technologies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.5rem;
        }

        .tech-item {
          text-align: center;
          padding: 1.5rem 1rem;
          transition: transform 0.3s ease;
        }

        .tech-item:hover {
          transform: translateY(-5px);
        }

        .tech-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .tech-name {
          color: #E5E7EB;
          font-size: 1rem;
          margin: 0;
        }

        /* CTA Section */
        .services-cta {
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
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }

          .process-timeline {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .hero-stats {
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .technologies-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
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

export default Services; 