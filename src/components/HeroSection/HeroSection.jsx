import React from 'react';
import '../../App.css';
import './herosection.css';
import Slider from './Slider/Slider';
import TopSlider from './TopSlider/TopSlider';
import Button from '@material-ui/core/Button';

// file directory
import useStyles from '../../assets/Styles/Button';

const HeroSection = () => {
  const classes = useStyles();
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
        <div className={classes.root}>
          <Button className={classes.buttonLogin}>LOGIN | REGISTER</Button>
          <Button className={classes.buttonItems}>BOOK A CONSULTATION</Button>
        </div>
        <div className="img-container">
          <img src="/images/nature.png" alt="blu.png" className="img-1" />
        </div>
      </div>
      {/* <div>
        <Slider />
      </div> */}
    </>
  );
};

export default HeroSection;
