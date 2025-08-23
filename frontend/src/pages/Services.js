import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    title: 'Website Development',
    desc: 'Custom websites built with responsive design and best practices.',
    icon: '🌐',
    color: '#667eea',
    price: 'Starting from ₹1999',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly']
  },
  {
    title: 'E-commerce Solutions',
    desc: 'Complete online store development with payment integration and inventory management.',
    icon: '🛒',
    color: '#764ba2',
    price: 'Starting from ₹4999',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Admin Panel']
  },
  {
    title: 'Web Applications',
    desc: 'Custom web applications tailored to your specific business requirements.',
    icon: '⚡',
    color: '#f093fb',
    price: 'Starting from ₹8999',
    features: ['Custom Features', 'Database Design', 'API Integration', 'User Management']
  },
  {
    title: 'UI/UX Design',
    desc: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: '🎨',
    color: '#4facfe',
    price: 'Starting from ₹2999',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Design System']
  },
  {
    title: 'Website Maintenance',
    desc: 'Ongoing support and maintenance to keep your website running smoothly.',
    icon: '🔧',
    color: '#43e97b',
    price: 'Starting from ₹999/month',
    features: ['Regular Updates', 'Security Monitoring', 'Backup Management', 'Performance Optimization']
  },
  {
    title: 'SEO & Marketing',
    desc: 'Search engine optimization and digital marketing to grow your online presence.',
    icon: '📈',
    color: '#fa709a',
    price: 'Starting from ₹1999/month',
    features: ['Keyword Research', 'Content Optimization', 'Analytics Tracking', 'Performance Reports']
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    desc: 'We analyze your requirements and create a detailed project plan.',
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    desc: 'Create wireframes and design mockups for your approval.',
    icon: '✏️'
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Build your website using best practices and industry standards.',
    icon: '💻'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    desc: 'Thorough testing and deployment to ensure everything works perfectly.',
    icon: '🚀'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Custom Web delivered an amazing website that exceeded our expectations. The team was professional and responsive throughout the entire process.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Mike Chen',
    role: 'Founder, DigitalCraft',
    content: 'Outstanding service and quality! Our e-commerce site is performing better than ever. Highly recommended for any web development needs.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'The SEO and marketing services helped us increase our online visibility by 300%. The results speak for themselves!',
    rating: 5,
    avatar: '👩‍🎨'
  }
];

const stats = [
  { number: '50+', label: 'Projects Completed', icon: '🎯' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
  { number: '24/7', label: 'Support Available', icon: '🛠️' },
  { number: '2-4', label: 'Weeks Delivery', icon: '⚡' }
];

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="services-page">
      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Professional web development services to help your business grow online
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`service-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                  <div className="service-price">{service.price}</div>
                  <Link to="/contact" className="service-btn">
                    Get Started
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
                
                <div className="service-highlight" style={{ background: service.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A systematic approach to delivering high-quality web solutions
            </p>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <div 
                key={step.step} 
                className={`process-item ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="process-icon" style={{ background: `linear-gradient(135deg, #667eea, #764ba2)` }}>
                  <span>{step.icon}</span>
                </div>
                <div className="process-content">
                  <div className="process-step">{step.step}</div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className={`testimonial-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <div className="author-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/plans" className="btn btn-outline">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;