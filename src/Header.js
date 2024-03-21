import React from 'react';
import restaurant from './restauranfood.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-content">
          <h1 className="display-title">Little Lemon</h1>
          <img src={restaurant} alt="Restaurant" className="header-image" />
          <p className='subtitle'>Chicago</p>
          <p className="lead-text">We are a family owned restaurant serving authentic Italian cuisine.</p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
      </div>
    </header>
  );
}

export default Header;