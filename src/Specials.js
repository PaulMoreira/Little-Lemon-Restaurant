import React from 'react';
import salad from './greek salad.jpg';
import bruschetta from './bruchetta.svg';
import lemonDessert from './lemon dessert.jpg';

function Specials() {
  return (
    <section className="specials">
      <h2 className="spec section-title">Specials</h2>
      <button className="menu-button">Online Menu</button>
      <div className="items">
        <div className="item">
          <img className="image-specials" src={salad} alt="Greek salad" />
          <h3 className="card-title">Greek Salad</h3>
          <p className="price highlight-text">$12.00</p>
          <p className="description">Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese.</p>
          <button className="order-button">Order a delivery</button>
        </div>
        <div className="item">
          <img className="image-specials" src={bruschetta} alt="Bruschetta" />
          <h3 className="card-title">Bruschetta</h3>
          <p className="price highlight-text">$5.93</p>
          <p className="description">Toasted bread topped with tomatoes, garlic, basil, and olive oil.</p>
          <button className="order-button">Order a delivery</button>
        </div>
        <div className="item">
          <img className="image-specials" src={lemonDessert} alt="Lemon dessert" />
          <h3 className="card-title">Lemon Dessert</h3>
          <p className="price highlight-text">$5.00</p>
          <p className="description">Lemon cake with lemon frosting and lemon zest.</p>
          <button className="order-button">Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
