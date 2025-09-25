import React, { useEffect, useState } from 'react';
import './Process.css';

const steps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    desc: 'We analyze your requirements and create a detailed project plan.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
      </svg>
    )
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    desc: 'Create wireframes and design mockups for your approval.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
      </svg>
    )
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Build your website using best practices and industry standards.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="currentColor"/>
      </svg>
    )
  },
  {
    step: '04',
    title: 'Testing & Launch',
    desc: 'Thorough testing and deployment to ensure everything works perfectly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
      </svg>
    )
  },
];

function Process() {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    steps.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, idx]);
      }, idx * 300); // Stagger by 300ms
    });
  }, []);

  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className="process-title">Our Process</h2>
        <div className="process-timeline" role="list">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`process-step ${visibleSteps.includes(idx) ? 'visible' : ''}`}
              role="listitem"
              aria-label={`Step ${item.step}: ${item.title}`}
            >
              <div className="step-icon">{item.icon}</div>
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
