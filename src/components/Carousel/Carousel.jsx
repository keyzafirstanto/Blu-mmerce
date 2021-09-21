import React from 'react';
import Carousell from 'react-elastic-carousel';
import Card from './Card/Card';
import Grid from '@material-ui/core/Grid';

import './carouselstyles.css';

// mock carousel
const mockCarousel = [
  {
    id: 1,
    image:
      'https://i.pinimg.com/originals/e6/92/55/e692559539a64ed198d1ba2a16a16c23.jpg',
    section: 'Men',
    link: 'login',
  },
  {
    id: 2,
    image:
      'https://i.pinimg.com/736x/4f/45/a5/4f45a515ae08a875e0b1da0c09866ec1.jpg',
    section: 'Women',
    link: 'register',
  },
  {
    id: 3,
    image:
      'https://i.pinimg.com/originals/bb/f7/c3/bbf7c33df61e7bb8fd580ec022b8a35a.png',
    section: 'Children',
    link: 'login',
  },
  {
    id: 4,
    image:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F07%2Fbalenciaga-winter-campaign-video-couples-coats-dresses-eveningwear-outerwear-1.jpg?q=75&w=800&cbr=1&fit=max',
    section: 'Designer',
    link: 'register',
  },
  {
    id: 5,
    image:
      'https://dazedimg-dazedgroup.netdna-ssl.com/1080/azure/dazed-prod/1290/3/1293533.jpg',
    section: 'Shoes',
    link: 'login',
  },
  {
    id: 6,
    image:
      'https://i.pinimg.com/originals/34/ac/fa/34acfa39667bb9ad6efae7e2f2dbe967.jpg',
    section: 'Bag & Accessories',
    link: 'register',
  },
  {
    id: 7,
    image:
      'https://i.pinimg.com/564x/b4/3e/d0/b43ed070d2cacb514ecaaa993a1c07d8.jpg',
    section: 'Home',
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
