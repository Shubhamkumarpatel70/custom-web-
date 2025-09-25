import React from 'react';
import './SplashScreen.css';

function SplashScreen() {
  return (
    <div className="splash">
      <div className="splash-background" />
      <div className="splash-content">
        <h1 className="splash-title">Welcome To</h1>
        <div className="splash-brand">BIHAR IT SOLUTION</div>
        <p className="splash-subtitle">Crafting modern websites and digital experiences</p>
        <div className="splash-loader">
          <span className="bar bar-1" />
          <span className="bar bar-2" />
          <span className="bar bar-3" />
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
