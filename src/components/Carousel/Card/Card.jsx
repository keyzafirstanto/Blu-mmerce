import React from 'react';
import { Link } from 'react-router-dom';
import './cardstyles.css';

const CardProps = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.link}`}>
        <img src={item.image} alt={`${item.section}.jpg`} />
        <div className="text-card">
          <p>{item.section}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardProps;
