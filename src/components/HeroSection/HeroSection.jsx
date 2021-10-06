import React from 'react';
import '../../App.css';
import './herosection.css';
import Slider from './Slider/Slider';
import TopSlider from './TopSlider/TopSlider';

// file directory

const HeroSection = () => {
  return (
    <>
      <div className="top-container">
        <TopSlider />
      </div>
      <div className="hero-container">
        <h1>
          Herbio's pioneering virtual care model is built around families,
          delivering better outcomes and lower costs for everyone.
        </h1>
        <p>WELCOME TO HERBIO</p>
        <div>
          <button>LOGIN | REGISTER</button>
          <button>BOOK A CONSULTATION</button>
        </div>
        <div className="img-container">
          <img src="/images/nature.png" alt="blu.png" className="img-1" />
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </>
  );
};

export default HeroSection;
