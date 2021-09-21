import React from 'react';
import '../../App.css';
import { Button } from '../../assets/Styles/Button.js';
import './herosection.css';
import Slider from './Slider/Slider';

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <h1>SOUTH ASIAN MOST UP-TO-DATE E-COMMERCE SITE</h1>
        <p>WELCOME TO BLU</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            LOGIN | REGISTER
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log('hey')}
          >
            RECENT ITEMS
          </Button>
        </div>
        <div className="img-container">
          {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
          <img src="/images/file20.png" alt="blu.png" className="img-1" />
          <img src="/images/file23.png" alt="blu.png" className="img-2" />
          <img src="/images/file05.png" alt="blu.png" className="img-3" />
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </>
  );
};

export default HeroSection;
