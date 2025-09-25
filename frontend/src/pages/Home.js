import React from 'react';
import './Home.css';
import Hero from './Hero.js';
import Stats from './Stats.js';
import Services from './Services.js';
import HomeServices from './HomeServices.js';
import Process from './Process.js';
import Testimonials from './Testimonials.js';
import WhyChooseUs from './WhyChooseUs.js';
import TechStack from './TechStack.js';
import Projects from './Projects.js';
import CTA from './CTA.js';
import HomeIntro from './HomeIntro.js';

function Home() {
  return (
    <div className="modern-home">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <TechStack />
      <Projects />
      <CTA />
    </div>
  );
}

export default Home;