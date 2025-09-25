import React, { useState, useEffect } from 'react';
import './Services.css';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const miniServices = [
    { title: 'Web Design', icon: '🎨', color: '#4facfe', price: 'From ₹1,999' },
    { title: 'Web Development', icon: '💻', color: '#667eea', price: 'From ₹3,999' },
    { title: 'E-commerce', icon: '🛒', color: '#764ba2', price: 'From ₹6,499' },
    { title: 'UI/UX', icon: '🧩', color: '#f093fb', price: 'From ₹2,499' },
    { title: 'Maintenance', icon: '🔧', color: '#43e97b', price: 'From ₹999/mo' },
    { title: 'SEO/Marketing', icon: '🚀', color: '#fa709a', price: 'From ₹1,999/mo' },
    { title: 'Speed Optimization', icon: '⚡', color: '#ffb703', price: 'From ₹1,499' },
    { title: 'Landing Page', icon: '📄', color: '#06d6a0', price: 'From ₹1,999' },
    { title: 'Portfolio Site', icon: '🗂️', color: '#00b4d8', price: 'From ₹2,499' },
    { title: 'Blog Setup', icon: '✍️', color: '#f77f00', price: 'From ₹1,499' },
    { title: 'CMS Development', icon: '🧱', color: '#9b5de5', price: 'From ₹4,999' },
    { title: 'Domain & Hosting', icon: '🌐', color: '#118ab2', price: 'At Cost' },
    { title: 'Logo Design', icon: '🖌️', color: '#ef476f', price: 'From ₹999' },
    { title: 'Brand Kit', icon: '🎯', color: '#ffd166', price: 'From ₹1,999' },
    { title: 'Analytics Setup', icon: '📊', color: '#06d6a0', price: 'From ₹799' },
    { title: 'Chatbot Integration', icon: '🤖', color: '#00b4d8', price: 'From ₹2,499' },
    { title: 'Payment Integration', icon: '💳', color: '#8338ec', price: 'From ₹1,999' },
    { title: 'Multi-language', icon: '🌍', color: '#3a86ff', price: 'From ₹2,499' },
    { title: 'PWA Setup', icon: '📱', color: '#8ac926', price: 'From ₹2,999' },
    { title: 'Site Migration', icon: '🚛', color: '#ff595e', price: 'From ₹1,999' },
    { title: 'Bug Fixes', icon: '🛠️', color: '#2a9d8f', price: 'From ₹499' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="services-page">
      <section className="services-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          {/* Mini Services - Quick Overview */}
          <div className="mini-services">
            <div className="mini-services-grid">
              {miniServices.map((item, idx) => (
                <div
                  key={item.title}
                  className={`mini-card ${isVisible ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <span
                    className="mini-icon"
                    style={{ background: `${item.color}20`, color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="mini-text">
                    <span className="mini-title">{item.title}</span>
                    {item.price && (
                      <span className="mini-price" style={{ color: item.color }}>{item.price}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;