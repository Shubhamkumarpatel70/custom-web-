import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const team = [
  {
    name: 'Shubham Patel',
    role: 'Founder & Lead Developer',
    bio: 'Passionate about building creative digital solutions and helping businesses grow online.',
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    experience: '3+ Years',
    projects: '15+ Projects',
    color: '#667eea',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Development Team',
    role: 'Full-Stack Developers',
    bio: 'Expert team of developers specializing in scalable solutions.',
    skills: ['MERN Stack', 'Python', 'Database Design', 'API Development'],
    experience: '2+ Years',
    projects: '20+ Projects',
    color: '#764ba2',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Design Team',
    role: 'UI/UX Designers',
    bio: 'Creative designers focused on user experience and modern, responsive web design.',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Responsive Design'],
    experience: '2+ Years',
    projects: '25+ Designs',
    color: '#f093fb',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Support Team',
    role: '24/7 Customer Support',
    bio: 'Dedicated support specialists ensuring smooth project delivery and client satisfaction.',
    skills: ['Customer Service', 'Technical Support', 'Project Management', 'Communication'],
    experience: '1+ Years',
    projects: '50+ Clients',
    color: '#4facfe',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  }
];

const values = [
  {
    title: 'Innovation',
    desc: 'We stay updated with the latest trends and best practices',
    icon: '💡',
    color: '#667eea'
  },
  {
    title: 'Collaboration',
    desc: 'Working together to achieve the best results for our clients',
    icon: '🤝',
    color: '#764ba2'
  },
  {
    title: 'Excellence',
    desc: 'Committed to delivering high-quality solutions every time',
    icon: '⭐',
    color: '#f093fb'
  },
  {
    title: 'Growth',
    desc: 'Continuously learning and improving our skills and processes',
    icon: '📈',
    color: '#4facfe'
  }
];

const perks = [
  {
    title: 'Flexible Work Environment',
    desc: 'Work from anywhere with our remote-friendly culture',
    icon: '🏠'
  },
  {
    title: 'Professional Development',
    desc: 'Continuous learning opportunities and skill development',
    icon: '📚'
  },
  {
    title: 'Competitive Benefits',
    desc: 'Health insurance, paid time off, and performance bonuses',
    icon: '💰'
  },
  {
    title: 'Team Events',
    desc: 'Regular team building activities and social events',
    icon: '🎉'
  }
];

function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="team-page">
      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Talented Team</h2>
            <p className="section-subtitle">
              Meet the professionals who make your projects successful
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.name} className={`team-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-card-header">
                  <div className="team-avatar" style={{ backgroundColor: `${member.color}20`, borderColor: member.color }}>
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="team-role-badge" style={{ backgroundColor: member.color }}>
                    {member.role}
                  </div>
                </div>
                <div className="team-card-body">
                  <h3 className="team-name" style={{ color: member.color }}>
                    {member.name}
                  </h3>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-skills">
                    <h4>Expertise:</h4>
                    <div className="skills-grid">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag" style={{ backgroundColor: `${member.color}20`, color: member.color }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="team-card-footer">
                  <div className="team-stats">
                    <div className="team-stat">
                      <span className="stat-value">{member.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="team-stat">
                      <span className="stat-value">{member.projects}</span>
                      <span className="stat-label">Completed</span>
                    </div>
                  </div>
                  <div className="team-social">
                    <a href={member.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                      <span>LinkedIn</span>
                    </a>
                    <a href={member.social.github} className="social-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                    <a href={member.social.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our success
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className={`value-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon" style={{ background: `${value.color}20`, color: value.color }}>
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title" style={{ color: value.color }}>
                  {value.title}
                </h3>
                <p className="value-description">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section section">
        <div className="container">
          <div className="join-team-content">
            <div className="section-header">
              <h2 className="section-title">Join Our Team</h2>
              <p className="section-subtitle">
                We're always looking for talented individuals to join our growing team
              </p>
            </div>
            <div className="perks-grid">
              {perks.map((perk, index) => (
                <div key={perk.title} className={`perk-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="perk-icon">
                    <span>{perk.icon}</span>
                  </div>
                  <div className="perk-content">
                    <h4 className="perk-title">{perk.title}</h4>
                    <p className="perk-desc">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="join-team-actions">
              <Link to="/contact" className="btn btn-primary">
                Apply Now
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work With Our Team?</h2>
            <p className="cta-description">
              Let's discuss your project and see how our talented team can help bring your vision to life.
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

export default Team;