import React from 'react';

// file directory
import {
  // HeroSection,
  Footer,
  Products,
  // Carousel,
  // Sidebar,
} from '../../components';

// styling
import './landingpage.css';

const LandingPage = () => {
  return (
    <div>
      {/* <div style={{ position: 'relative', width: '100%', background: '#fff' }}>
        <Sidebar />
      </div> */}
      {/* <HeroSection /> */}

      <div>
        <Products />
      </div>
      {/* <div>
        <Carousel />
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
