import React from 'react';

import './TopSlider.css';

const TopSlider = () => {
  return (
    <div>
      <div className="top-container">
        <div className="main-text">
          <h2>The most secure telemedicine solution for your well-being.®</h2>
          <h5>Lowering healthcare costs by raising the bar</h5>
          <p>
            Ongoing assessments, proactive check-ins, and human touchpoints
            drive industry-leading engagement, helping members identify risks
            early and prevent costly complications.
          </p>
        </div>
        <div className="icon-container">
          <img className="image" src="images/logo.png" alt="wellbeing.jpg" />
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
