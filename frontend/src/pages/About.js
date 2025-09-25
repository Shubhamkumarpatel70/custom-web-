import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const highlights = [
  { year: '2022', text: 'Founded Bihar IT Solution', icon: '🚀', color: '#667eea', description: 'Started our journey with a vision to create amazing digital experiences' },
  { year: '2023', text: '10+ Satisfied Clients', icon: '🤝', color: '#764ba2', description: 'Built trust and delivered exceptional results for our growing client base' },
  { year: '2024', text: '12+ Projects Completed', icon: '🏆', color: '#f093fb', description: 'Successfully launched diverse projects across different industries' },
];

const values = [
  { icon: '💡', label: 'Innovation', description: 'Cutting-edge solutions for modern challenges', color: '#667eea', features: ['Latest Technologies', 'Creative Solutions', 'Future-Proof Design'] },
  { icon: '🤝', label: 'Customer Focus', description: 'Your success is our priority', color: '#764ba2', features: ['Personalized Approach', '24/7 Support', 'Client Satisfaction'] },
  { icon: '⏰', label: 'On-Time Delivery', description: 'Meeting deadlines with quality', color: '#f093fb', features: ['Project Management', 'Timeline Adherence', 'Quality Assurance'] },
  { icon: '🔒', label: 'Reliability', description: 'Dependable solutions you can trust', color: '#4facfe', features: ['Secure Development', 'Stable Performance', 'Long-term Support'] },
];

const team = [
  { 
    name: 'Shubham Patel', 
    role: 'Founder & Lead Developer', 
    icon: '👨‍💻', 
    description: 'Passionate about building creative digital solutions and helping businesses grow online.',
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    experience: '3+ Years',
    projects: '15+ Projects',
    color: '#667eea'
  },
  { 
    name: 'Development Team', 
    role: 'Full-Stack Developers', 
    icon: '👨‍💻', 
    description: 'Expert team of developers specializing in scalable solutions.',
    skills: ['MERN Stack', 'Python', 'Database Design', 'API Development'],
    experience: '2+ Years',
    projects: '20+ Projects',
    color: '#764ba2'
  },
  { 
    name: 'Design Team', 
    role: 'UI/UX Designers', 
    icon: '🎨', 
    description: 'Creative designers focused on user experience and modern, responsive web design.',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Responsive Design'],
    experience: '2+ Years',
    projects: '25+ Designs',
    color: '#f093fb'
  },
  { 
    name: 'Support Team', 
    role: '24/7 Customer Support', 
    icon: '🛠️', 
    description: 'Dedicated support specialists ensuring smooth project delivery and client satisfaction.',
    skills: ['Customer Service', 'Technical Support', 'Project Management', 'Communication'],
    experience: '1+ Years',
    projects: '50+ Clients',
    color: '#4facfe'
  },
];

const services = [
  {
    title: 'Web Design & Development',
    description: 'Modern, responsive websites built with best practices',
    icon: '🎨',
    color: '#667eea',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly']
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store development with payment integration',
    icon: '🛒',
    color: '#764ba2',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Admin Panel']
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored web applications for your specific business needs',
    icon: '⚡',
    color: '#f093fb',
    features: ['Custom Features', 'Database Design', 'API Integration', 'User Management']
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support and maintenance services',
    icon: '🔧',
    color: '#4facfe',
    features: ['Regular Updates', 'Security Monitoring', 'Backup Management', 'Performance Optimization']
  }
];

const stats = [
  { number: '2+', label: 'Years Experience', icon: '📈' },
  { number: '10+', label: 'Happy Clients', icon: '😊' },
  { number: '12+', label: 'Projects Done', icon: '🚀' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <section className="who-we-are section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-description">
                At <span className="brand-highlight">Bihar IT Solution</span>, we believe in delivering excellence in every project. Our team is passionate about building creative, innovative, and reliable digital solutions that help our clients grow online.
              </p>
              <p className="section-description">
                We specialize in creating modern, responsive websites that not only look great but also perform exceptionally well. Our commitment to quality, innovation, and customer satisfaction sets us apart in the competitive web development industry.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h4>Web Design & Development</h4>
                    <p>Modern, responsive websites built with best practices</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎓</div>
                  <div className="feature-content">
                    <h4>Education & Client Websites</h4>
                    <p>Specialized solutions for educational institutions and businesses</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <div className="feature-content">
                    <h4>Custom Solutions & Bug Fixing</h4>
                    <p>Tailored solutions and reliable maintenance services</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-content">
                    <h4>24/7 Support & On-Time Delivery</h4>
                    <p>Round-the-clock support and guaranteed project delivery</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Get Started With Us
                <span className="btn-icon">→</span>
              </Link>
            </div>
            <div className="content-text-secondary">
              <h3 className="secondary-title">Our Approach</h3>
              <p className="secondary-description">
                We follow a comprehensive approach to web development that ensures every project meets the highest standards of quality and performance.
              </p>
              <div className="approach-list">
                <div className="approach-item">
                  <div className="approach-number">01</div>
                  <div className="approach-content">
                    <h4>Discovery & Planning</h4>
                    <p>We analyze your requirements and create a detailed project plan</p>
                  </div>
                </div>
                <div className="approach-item">
                  <div className="approach-number">02</div>
                  <div className="approach-content">
                    <h4>Design & Development</h4>
                    <p>Create beautiful designs and build robust functionality</p>
                  </div>
                </div>
                <div className="approach-item">
                  <div className="approach-number">03</div>
                  <div className="approach-content">
                    <h4>Testing & Launch</h4>
                    <p>Thorough testing and deployment to ensure everything works perfectly</p>
                  </div>
                </div>
                <div className="approach-item">
                  <div className="approach-number">04</div>
                  <div className="approach-content">
                    <h4>Support & Maintenance</h4>
                    <p>Ongoing support and maintenance to keep your website running smoothly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
    

      {/* Journey Timeline */}
      <section className="journey-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Milestones that define our growth and commitment to excellence
            </p>
          </div>
          <div className="timeline">
            {highlights.map((highlight, index) => (
              <div key={highlight.year} className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Central node and connector from the spine to the card */}
                <span className="timeline-node" aria-hidden="true"></span>
                <span className="timeline-connector" aria-hidden="true"></span>
                <div className="timeline-content">
                  <div className="timeline-icon" style={{ background: highlight.color }}>
                    <span>{highlight.icon}</span>
                  </div>
                  <div className="timeline-info">
                    <h3 className="timeline-year" style={{ color: highlight.color }}>
                      {highlight.year}
                    </h3>
                    <h4 className="timeline-title">{highlight.text}</h4>
                    <p className="timeline-description">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">
              Our mission is to empower our clients with innovative, reliable, and visually stunning web solutions that help them grow online.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.label} className={`value-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon" style={{ background: `${value.color}20`, color: value.color }}>
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title" style={{ color: value.color }}>
                  {value.label}
                </h3>
                <p className="value-description">{value.description}</p>
                <ul className="value-features">
                  {value.features.map((feature, idx) => (
                    <li key={idx} className="value-feature">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="value-highlight" style={{ background: value.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
   

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work With Us?</h2>
            <p className="cta-description">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;