import React from 'react';

// file directory
import { HeroSection, Footer, Products, Carousel } from '../../components';

// styling
import './landingpage.css';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <Products />
      </div>
      <div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
