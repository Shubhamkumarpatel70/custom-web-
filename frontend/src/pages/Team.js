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
      <section className="team-members-section section" style={{ marginTop: '160px' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Talented Team</h2>
            <p className="section-subtitle">
              Meet the people behind Custom Web who make your projects successful
            </p>
          </div>
          <div className="services-grid">
            {team.map((member, index) => (
              <div key={member.name} className="service-card card animate-fade-in-up" style={{ boxShadow: '0 8px 32px rgba(46,204,113,0.13), 0 2px 16px rgba(0,0,0,0.13)', background: 'linear-gradient(135deg, rgba(35,39,47,0.85) 60%, rgba(46,204,113,0.08) 100%)', padding: '2.5rem 1.7rem 2rem 1.7rem', borderRadius: '1.5rem' }}>
                <div className="service-header" style={{ justifyContent: 'flex-start', gap: '1.2rem' }}>
                  <div className="service-icon" style={{ background: `${member.color}20`, color: member.color, fontWeight: 700, fontSize: '2.3rem', width: '82px', height: '82px', borderRadius: '50%', border: `4px solid ${member.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.7rem', boxShadow: `0 0 0 6px rgba(46,204,113,0.10)` }}>
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <div className="service-content" style={{ textAlign: 'left', paddingLeft: '0.2em', paddingRight: '0.2em' }}>
                  <h3 className="service-title" style={{ color: member.color, fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.3rem' }}>
                    {member.name}
                  </h3>
                  <p className="service-description" style={{ color: '#A0AEC0', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.3rem' }}>{member.role}</p>
                  <p className="service-description" style={{ color: '#E5E7EB', fontSize: '1rem', marginBottom: '0.8rem' }}>{member.bio}</p>
                  <div className="service-features" style={{ marginTop: '1.1rem' }}>
                    <h4 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.3rem', color: '#fff' }}>Expertise:</h4>
                    <ul style={{ paddingLeft: '1.1em', margin: 0 }}>
                      {member.skills.map((skill, idx) => (
                        <li key={idx} style={{ marginBottom: '0.3rem', display: 'flex', alignItems: 'center' }}>
                          <span className="feature-check" style={{ color: member.color, marginRight: '0.5rem', fontWeight: 700 }}>
                            ✓
                          </span>
                          <span style={{ color: '#E5E7EB', fontSize: '0.98rem' }}>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="service-highlight" style={{ background: member.color }}></div>
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
          color: #E5E7EB;
          min-height: 100vh;
        }

        /* Hero Section */
        .team-hero {
          padding: 60px 0 30px 0;
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
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 2.7rem;
          font-weight: 800;
          margin-bottom: 0.7rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFD700, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          color: #A0AEC0;
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
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
          padding: 40px 0 20px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .service-card {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1.2rem;
          box-shadow: 0 4px 32px rgba(46,204,113,0.10), 0 1.5px 8px rgba(0,0,0,0.10);
          padding: 2rem 1.3rem 1.5rem 1.3rem;
          transition: transform 0.22s, box-shadow 0.22s, border 0.22s;
          border: 2.5px solid transparent;
          position: relative;
          backdrop-filter: blur(8px);
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 8px 40px rgba(46,204,113,0.18), 0 2px 16px rgba(0,0,0,0.13);
          border: 2.5px solid #2ECC71;
        }

        .service-card::before {
          content: '';
          display: block;
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 6px;
          border-radius: 1.2rem 1.2rem 0 0;
          background: linear-gradient(90deg, #2ECC71, #3498db);
          opacity: 0.7;
        }

        .service-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .service-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.7rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2ECC71, #0057D9 80%);
          color: #fff;
          box-shadow: 0 2px 8px rgba(46,204,113,0.07);
          border: 3px solid #fff;
          outline: 3px solid #2ECC71;
        }

        .service-content {
          margin-bottom: 1.1rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .service-description {
          color: #A0AEC0;
          font-size: 1rem;
          margin-bottom: 0.7rem;
        }

        .service-features {
          margin-bottom: 0.7rem;
        }

        .feature-check {
          margin-right: 0.5rem;
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

        /* Team Values */
        .team-values-section {
          padding: 40px 0 20px 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          margin-top: 25px;
        }

        .value-card {
          background: rgba(35, 39, 47, 0.7);
          border-radius: 1rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 1.5rem 1.1rem 1.2rem 1.1rem;
          text-align: center;
          border: 2px solid transparent;
          transition: box-shadow 0.2s, border 0.2s;
          backdrop-filter: blur(8px);
        }

        .value-card:hover {
          border: 2px solid #2ECC71;
          box-shadow: 0 4px 18px rgba(46,204,113,0.10);
        }

        .value-icon {
          font-size: 2rem;
          margin-bottom: 0.7rem;
        }

        .value-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .value-description {
          color: #A0AEC0;
          font-size: 0.98rem;
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
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
          .service-card {
            padding: 1.5rem 0.7rem 1.2rem 0.7rem !important;
          }
          .service-icon {
            width: 56px !important;
            height: 56px !important;
            font-size: 1.5rem !important;
          }
          .service-title {
            font-size: 1.05rem !important;
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 1.1rem 0.4rem 0.8rem 0.4rem !important;
          }
          .service-icon {
            width: 44px !important;
            height: 44px !important;
            font-size: 1.1rem !important;
          }
          .service-title {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Team; 