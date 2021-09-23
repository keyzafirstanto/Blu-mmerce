import React from 'react';
import '../../App.css';
import './herosection.css';
import Slider from './Slider/Slider';
import Button from '@material-ui/core/Button';

// file directory
import useStyles from '../../assets/Styles/Button';

const HeroSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className="hero-container">
        <h1>SOUTH ASIAN MOST UP-TO-DATE E-COMMERCE SITE</h1>
        <p>WELCOME TO BLU</p>
        <div className={classes.root}>
          <Button className={classes.buttonLogin}>LOGIN | REGISTER</Button>
          <Button className={classes.buttonItems}>RECENT ITEMS</Button>
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
