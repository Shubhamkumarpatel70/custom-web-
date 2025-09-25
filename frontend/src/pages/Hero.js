import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const targets = [textRef.current, mapRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="hero"
      className="hero"
      aria-labelledby="hero-title"
      aria-describedby="hero-subtitle"
    >
      <div className="hero-background" aria-hidden="true">
        <div className="hero-gradient" aria-hidden="true"></div>
        <div className="bihar-abstract" aria-hidden="true"></div>
        <div className="floating-shapes" aria-hidden="true">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <div className="badge" aria-label="Brand">Bihar IT Solution</div>
            <h1 className="hero-title" id="hero-title">
              Transforming Bihar with <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="hero-subtitle" id="hero-subtitle">
              Web | Mobile | Cloud | Consultancy
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-secondary" aria-label="Explore our services">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-primary" aria-label="Contact us">
                Contact Us <span className="btn-icon" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right-side map-styled Bihar (accurate outline SVG) */}
          <div className="hero-map" ref={mapRef} aria-hidden="true">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Bihar_outline_shape.svg"
              alt="Bihar outline map"
              loading="lazy"
              decoding="async"
              style={{ maxWidth: '320px', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
