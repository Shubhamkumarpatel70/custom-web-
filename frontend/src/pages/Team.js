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
      <section className="team-members-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Talented Team</h2>
            <p className="section-subtitle">
              Meet the people behind Custom Web who make your projects successful
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.name} className="team-card card animate-fade-in-up">
                <div className="team-card-header">
                  <div className="member-avatar" style={{ background: member.color }}>
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="member-stats">
                    <div className="stat">
                      <span className="stat-value">{member.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{member.projects}</span>
                      <span className="stat-label">Completed</span>
                    </div>
                  </div>
                </div>
                
                <div className="team-card-content">
                  <h3 className="member-name" style={{ color: member.color }}>
                    {member.name}
                  </h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-skills">
                    <h4>Expertise:</h4>
                    <div className="skills-list">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag" style={{ borderColor: member.color, color: member.color }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="team-card-footer">
                  <Link to="/contact" className="contact-member-btn" style={{ borderColor: member.color, color: member.color }}>
                    Get in Touch
                  </Link>
                </div>

                <div className="member-highlight" style={{ background: member.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="team-values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our culture
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card card">
                <div className="value-icon" style={{ color: value.color }}>
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
          <div className="join-content card-elevated">
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
              <Link to="/contact" className="btn btn-secondary">
                Send Your Resume
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Styles */}
      <style jsx>{`
        .team-page {
          background: #181A20;
          min-height: 100vh;
        }

        /* Hero Section */
        .team-hero {
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

        /* Team Members */
        .team-members-section {
          background: #181A20;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .team-card {
          position: relative;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .team-card-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .member-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .member-stats {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-weight: 700;
          color: #2ECC71;
          font-size: 1.125rem;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #A0AEC0;
        }

        .team-card-content {
          flex: 1;
          margin-bottom: 2rem;
        }

        .member-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .member-role {
          color: #A0AEC0;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .member-bio {
          color: #A0AEC0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .member-skills h4 {
          color: #E5E7EB;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          padding: 0.25rem 0.75rem;
          border: 1px solid;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
        }

        .team-card-footer {
          margin-top: auto;
        }

        .contact-member-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.75rem;
          border: 2px solid;
          border-radius: 2rem;
          background: transparent;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-member-btn:hover {
          background: currentColor;
          color: #181A20 !important;
          transform: translateY(-2px);
        }

        .member-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .team-card:hover .member-highlight {
          transform: scaleX(1);
        }

        /* Team Values */
        .team-values-section {
          background: #23272F;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          text-align: center;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .value-description {
          color: #A0AEC0;
          line-height: 1.6;
          margin: 0;
        }

        /* Join Team Section */
        .join-team-section {
          background: #181A20;
        }

        .join-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 87, 217, 0.1));
          border: 1px solid rgba(46, 204, 113, 0.2);
        }

        .join-title {
          margin-bottom: 1rem;
          color: #E5E7EB;
        }

        .join-description {
          color: #A0AEC0;
          margin-bottom: 2rem;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
        }

        .join-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .join-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #E5E7EB;
          font-weight: 600;
        }

        .feature-icon {
          font-size: 1.25rem;
        }

        .join-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }

          .values-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .hero-stats {
            gap: 2rem;
          }

          .join-features {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }
        }

        @media (max-width: 600px) {
          .team-grid {
            grid-template-columns: 1fr;
          }

          .team-card-header {
            flex-direction: column;
            text-align: center;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .join-actions {
            flex-direction: column;
            align-items: center;
          }

          .join-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Team; 