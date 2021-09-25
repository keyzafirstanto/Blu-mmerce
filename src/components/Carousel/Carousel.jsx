import React from 'react';
import Carousell from 'react-elastic-carousel';
import Card from './Card/Card';
import Grid from '@material-ui/core/Grid';

import './carouselstyles.css';

// mock carousel
const mockCarousel = [
  {
    id: 1,
    image: 'images/01.jpg',
    section: 'Healthcare',
    link: 'login',
  },
  {
    id: 2,
    image: 'images/02.jpg',
    section: 'Vaccine',
    link: 'register',
  },
  {
    id: 3,
    image: 'images/03.jpg',
    section: 'Consultation',
    link: 'login',
  },
  {
    id: 4,
    image: 'images/05.jpg',
    section: 'Community',
    link: 'register',
  },
  {
    id: 5,
    image: 'images/06.jpg',
    section: 'Baby',
    link: 'login',
  },
  {
    id: 6,
    image: 'images/nature01.jpg',
    section: 'Pregnancy',
    link: 'register',
  },
  {
    id: 7,
    image: 'images/Sunlight.png',
    section: 'Medicine',
    link: 'login',
  },
];

const Carousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="main-container">
      <Carousell breakPoints={breakPoints}>
        {mockCarousel.map((item) => (
          <Grid key={item.id}>
            <Card item={item} />
          </Grid>
        ))}
      </Carousell>
    </div>
  );
};

export default Carousel;
