import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: 'Tailored websites built with best practices',
    icon: '💻',
    features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
  },
  {
    id: 2,
    title: 'E-commerce Solutions',
    description: 'Complete online store development with payment integration',
    icon: '🛒',
    features: ['Payment Gateways', 'Inventory Management', 'Order Processing', 'Analytics'],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  },
  {
    id: 3,
    title: 'Mobile-First Design',
    description: 'Responsive designs optimized for all devices',
    icon: '📱',
    features: ['Progressive Web Apps', 'Mobile Optimization', 'Touch Interfaces', 'Performance'],
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and deployment solutions',
    icon: '☁️',
    features: ['AWS/Azure Setup', 'CI/CD Pipelines', 'Monitoring', 'Security'],
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    quote: 'Custom Web transformed our business with a stunning website that increased our conversions by 300%.',
    avatar: '👩‍💼',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Digital Agency',
    quote: 'The team delivered our e-commerce platform on time and exceeded all expectations. Highly recommended!',
    avatar: '👨‍💻',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    quote: 'Professional, creative, and reliable. Our new website has significantly improved our online presence.',
    avatar: '👩‍🎨',
    rating: 5
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed', icon: '🚀' },
  { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { number: '24/7', label: 'Support Available', icon: '🛡️' },
  { number: '50+', label: 'Happy Clients', icon: '😊' }
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="modern-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="hero-text">
              <h1 className="hero-title">
                We Build
                <span className="gradient-text"> Digital Experiences</span>
                <br />That Drive Results
              </h1>
              <p className="hero-subtitle">
                Transform your business with custom web solutions that combine stunning design, 
                powerful functionality, and innovative solutions.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                  <span className="btn-icon">→</span>
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="hero-card">
                <div className="card-header">
                  <div className="status-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="card-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span> website = <span className="code-string">&#39;Amazing&#39;</span>;
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">if</span> (website === <span className="code-string">&#39;Amazing&#39;</span>) &#123;
                  </div>
                  <div className="code-line indent">
                    <span className="code-function">return</span> <span className="code-string">&#39;Success!&#39;</span>;
                  </div>
                  <div className="code-line">&#125;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-header">
                  <div className="service-icon" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="service-link">
                  Learn More
                  <span className="link-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Our proven process ensures successful project delivery
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>We analyze your requirements and create a detailed project roadmap</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Create stunning designs and interactive prototypes for your approval</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Development</h3>
                <p>Build your solution using best practices and industry standards</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Launch & Support</h3>
                <p>Deploy your project and provide ongoing maintenance and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Hear from businesses that have transformed their digital presence
            </p>
          </div>
          
          <div className="testimonials-container">
            <button onClick={prevTestimonial} className="testimonial-nav prev">
              <span>←</span>
            </button>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonials[currentTestimonial].avatar}</div>
                  <div className="author-info">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <p>{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button onClick={nextTestimonial} className="testimonial-nav next">
              <span>→</span>
            </button>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Custom Web?</h2>
            <p className="section-subtitle">
              We combine technical expertise with creative innovation to deliver exceptional results
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast websites with 99.9% uptime guarantee and optimized performance for the best user experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Creative Design</h3>
              <p>Unique, modern designs that capture your brand essence and engage your audience effectively.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Safe</h3>
              <p>Enterprise-grade security with SSL certificates, regular backups, and protection against threats.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile-First</h3>
              <p>Responsive designs that work perfectly on all devices, from smartphones to desktop computers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>SEO Optimized</h3>
              <p>Built with search engine optimization in mind to help your website rank higher in search results.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and maintenance to keep your website running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Technology Stack</h2>
            <p className="section-subtitle">
              We use cutting-edge technologies to build robust, scalable, and modern web applications
            </p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-items">
                <span className="tech-item">React.js</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Vue.js</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Tailwind CSS</span>
                <span className="tech-item">Material-UI</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-items">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Django</span>
                <span className="tech-item">PHP</span>
                <span className="tech-item">Laravel</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-items">
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MySQL</span>
                <span className="tech-item">Redis</span>
                <span className="tech-item">Firebase</span>
                <span className="tech-item">Supabase</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <div className="tech-items">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Google Cloud</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Kubernetes</span>
                <span className="tech-item">CI/CD</span>
                <span className="tech-item">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Projects</h2>
            <p className="section-subtitle">
              Explore some of our recent work and see how we've helped businesses grow
            </p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <span className="project-category">E-commerce</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Modern Fashion Store</h3>
                <p>A complete e-commerce platform with advanced filtering, payment integration, and inventory management.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <span className="project-category">SaaS Platform</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Project Management Tool</h3>
                <p>A comprehensive SaaS application for team collaboration, task management, and project tracking.</p>
                <div className="project-tech">
                  <span>Vue.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <span className="project-category">Web App</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Real Estate Platform</h3>
                <p>A modern real estate website with property listings, advanced search, and virtual tour integration.</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's discuss your project and bring your vision to life</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Get Started Today
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/plans" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;