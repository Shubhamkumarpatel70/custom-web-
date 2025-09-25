import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textRef = useRef(null);
  const [typed, setTyped] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Modern Web Development',
    'E‑Commerce Solutions',
    'Custom Mobile Apps',
    'Cloud & DevOps',
    'Support for Bihar Startups'
  ];

  useEffect(() => {
    const targets = [textRef.current];
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

  // Typewriter effect
  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const speed = isDeleting ? 50 : 100; // typing speed
    const timer = setTimeout(() => {
      const nextText = isDeleting
        ? current.substring(0, typed.length - 1)
        : current.substring(0, typed.length + 1);
      setTyped(nextText);

      if (!isDeleting && nextText === current) {
        // pause before deleting
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typed, isDeleting, phraseIndex, phrases]);
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
            <div className="badge" aria-label="Brand">BIHAR IT SOLUTION</div>
            <h1 className="hero-title" id="hero-title">
              <span className="hero-line1">Transforming Bihar with</span>
              <span className="hero-line2">
                <span className="glass-title gradient-text">BIHAR IT SOLUTION</span>
              </span>
            </h1>
            <p className="hero-subtitle" id="hero-subtitle">
              Web | Mobile | Cloud | Consultancy
            </p>
            <div className="typing-line" aria-live="polite">
              <span className="typing-prefix">We build</span>
              <span className="typing-text"> {typed}</span>
              <span className="typing-caret" aria-hidden="true">|</span>
            </div>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-secondary" aria-label="Explore our services">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-primary" aria-label="Contact us">
                Contact Us <span className="btn-icon" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
