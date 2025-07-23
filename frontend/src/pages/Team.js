import React from 'react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Shubham Patel',
    role: 'Founder & Lead Developer',
    bio: 'Passionate about building creative digital solutions and helping businesses grow online with modern web technologies.',
    img: '', 
    color: '#2ECC71',
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    experience: '3+ Years',
    projects: '15+ Projects'
  },
  {
    name: 'Development Team',
    role: 'Full-Stack Developers',
    bio: 'Expert team of developers specializing in modern web technologies and scalable solutions.',
    img: '',
    color: '#0057D9',
    skills: ['MERN Stack', 'Python', 'Database Design', 'API Development'],
    experience: '2+ Years',
    projects: '20+ Projects'
  },
  {
    name: 'Design Team',
    role: 'UI/UX Designers',
    bio: 'Creative designers focused on user experience and modern, responsive web design.',
    img: '',
    color: '#FF6B35',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Responsive Design'],
    experience: '2+ Years',
    projects: '25+ Designs'
  },
  {
    name: 'Support Team',
    role: '24/7 Customer Support',
    bio: 'Dedicated support specialists ensuring smooth project delivery and client satisfaction.',
    img: '',
    color: '#9333EA',
    skills: ['Customer Service', 'Technical Support', 'Project Management', 'Communication'],
    experience: '1+ Years',
    projects: '50+ Clients'
  }
];

const values = [
  {
    title: 'Innovation',
    desc: 'We stay updated with the latest technologies and trends',
    icon: '💡',
    color: '#2ECC71'
  },
  {
    title: 'Quality',
    desc: 'We deliver high-quality solutions that exceed expectations',
    icon: '⭐',
    color: '#0057D9'
  },
  {
    title: 'Collaboration',
    desc: 'We work closely with our clients throughout the process',
    icon: '🤝',
    color: '#FF6B35'
  },
  {
    title: 'Growth',
    desc: 'We help businesses grow and succeed in the digital world',
    icon: '📈',
    color: '#9333EA'
  }
];

function Team() {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="hero-subtitle">
              Talented professionals dedicated to delivering exceptional web development solutions and outstanding customer service.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Combined</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Talented Team</h2>
            <p className="section-subtitle">
              Meet the people behind Custom Web who make your projects successful
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.name} className="team-card">
                <div className="team-card-header">
                  <div className="team-avatar" style={{ backgroundColor: `${member.color}20`, borderColor: member.color }}>
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <div className="team-card-body">
                  <h3 className="team-name" style={{ color: member.color }}>
                    {member.name}
                  </h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-skills">
                    <h4>Expertise:</h4>
                    <ul>
                      {member.skills.map((skill, idx) => (
                        <li key={idx}>
                          <span className="skill-bullet" style={{ color: member.color }}>✓</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="team-card-footer">
                  <div className="team-stats">
                    <span className="team-stat">
                      <strong>{member.experience}</strong> Experience
                    </span>
                    <span className="team-stat">
                      <strong>{member.projects}</strong> Completed
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="team-values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our culture
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card" style={{ borderColor: value.color }}>
                <div className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section">
        <div className="container">
          <div className="join-content">
            <h2 className="join-title">Want to Join Our Team?</h2>
            <p className="join-description">
              We're always looking for talented individuals who share our passion for creating amazing web experiences.
            </p>
            <div className="join-features">
              <div className="join-feature">
                <span className="feature-icon">🚀</span>
                <span>Remote Work</span>
              </div>
              <div className="join-feature">
                <span className="feature-icon">📚</span>
                <span>Learning Opportunities</span>
              </div>
              <div className="join-feature">
                <span className="feature-icon">💰</span>
                <span>Competitive Pay</span>
              </div>
              <div className="join-feature">
                <span className="feature-icon">🎯</span>
                <span>Growth Potential</span>
              </div>
            </div>
            <div className="join-actions">
              <Link to="/contact" className="btn btn-primary">
                Send Your Resume
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        .team-page {
          background: #0F172A;
          color: #E5E7EB;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Hero Section */
        .team-hero {
          position: relative;
          padding: 6rem 0 4rem;
          overflow: hidden;
          text-align: center;
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
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #FFFFFF;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2ECC71, #0057D9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          color: #CBD5E1;
          font-size: clamp(1rem, 2vw, 1.25rem);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: clamp(1.5rem, 4vw, 3rem);
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          color: #E5E7EB;
          opacity: 0.9;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          color: #94A3B8;
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Team Members Section */
        .team-members-section {
          padding: 5rem 0;
          background: #0F172A;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .team-card {
          background: rgba(15, 23, 42, 0.7);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-color: rgba(46, 204, 113, 0.3);
        }

        .team-card-header {
          padding: 1.5rem 1.5rem 0;
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          font-weight: 700;
          color: #FFFFFF;
          border: 3px solid;
          margin: 0 auto;
        }

        .team-card-body {
          padding: 1.5rem;
          flex-grow: 1;
        }

        .team-name {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .team-role {
          color: #94A3B8;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 1rem;
        }

        .team-bio {
          color: #E5E7EB;
          font-size: 0.9375rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .team-skills {
          margin-top: 1.5rem;
        }

        .team-skills h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .team-skills ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .team-skills li {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 0.9375rem;
          color: #E5E7EB;
        }

        .skill-bullet {
          margin-right: 0.5rem;
          font-weight: 700;
        }

        .team-card-footer {
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.1);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .team-stats {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .team-stat {
          color: #94A3B8;
        }

        .team-stat strong {
          color: #FFFFFF;
          font-weight: 600;
        }

        /* Values Section */
        .team-values-section {
          padding: 5rem 0;
          background: rgba(15, 23, 42, 0.5);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .value-card {
          background: rgba(15, 23, 42, 0.7);
          border-radius: 0.75rem;
          padding: 2rem 1.5rem;
          text-align: center;
          border: 1px solid;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .value-description {
          color: #94A3B8;
          font-size: 0.9375rem;
          line-height: 1.6;
        }

        /* Join Team Section */
        .join-team-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95));
        }

        .join-content {
          background: rgba(15, 23, 42, 0.7);
          border-radius: 1rem;
          padding: 3rem 2rem;
          max-width: 800px;
          margin: 0 auto;
          border: 1px solid rgba(46, 204, 113, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .join-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .join-description {
          color: #94A3B8;
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .join-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .join-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #E5E7EB;
          font-weight: 600;
          font-size: 0.9375rem;
        }

        .feature-icon {
          font-size: 1.5rem;
        }

        .join-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: #2ECC71;
          color: #FFFFFF;
          border: 1px solid #2ECC71;
        }

        .btn-primary:hover {
          background: #27AE60;
          border-color: #27AE60;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: #2ECC71;
          border: 1px solid #2ECC71;
        }

        .btn-secondary:hover {
          background: rgba(46, 204, 113, 0.1);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .team-hero {
            padding: 4rem 0 3rem;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .join-features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            gap: 1.5rem;
          }
          
          .join-actions {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;