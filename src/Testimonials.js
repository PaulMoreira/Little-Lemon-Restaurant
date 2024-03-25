import React from 'react';
import imgProfile from './profile-image-1.jpeg';
import imgProfile2 from './profile-image-2.jpeg';
import imgProfile3 from './profile-image-3.jpeg';
import imgProfile4 from './profile-image-4.jpeg';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="tes section-title">Testimonials</h2>
      <div className="testimonial-items">
        {/* Repeat this block for each testimonial */}
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src={imgProfile} alt="User profile"></img>User profile</div>
          <p className="review">The salad was great!</p>
        </div>
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src={imgProfile2} alt="User profile"></img>User profile</div>
          <p className="review">The food was amazing!</p>
        </div>
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src={imgProfile3} alt="User profile"></img>User profile</div>
          <p className="review">The service was excellent!</p>
        </div>
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src={imgProfile4} alt="User profile"></img>User profile</div>
          <p className="review">The atmosphere was great!</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;