import React from 'react';

function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="items">
        {/* Repeat this block for each special item */}
        <div className="item">
          <div className="image-placeholder"></div>
          <h3>Greek Salad</h3>
          <p className="price">$12.00</p>
          <p className="description">Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese.</p>
          <button className="order-button">Order a delivery</button>
        </div>
        <div className="items">
          <div className="image-placeholder"></div>
          <h3>Bruschetta</h3>
          <p className="price">$5.93</p>
          <p className="description">Toasted bread topped with tomatoes, garlic, basil, and olive oil.</p>
          <button className="order-button">Order a delivery</button>
        </div>
        <div className="items">
          <div className="image-placeholder"></div>
          <h3>Lemon Dessert</h3>
          <p className="price">$5.00</p>
          <p className="description">Lemon cake with lemon frosting and lemon zest.</p>
          <button className="order-button">Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
