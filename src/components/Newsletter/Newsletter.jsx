import React from 'react';

import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="n-container">
      <h2>Subscribe Newsletter</h2>
      <span>Finnancial transaction remotely using mobile</span>
      <form className="n-form">
        <input type="text" name="email" id="email" placeholder="Enter your email"/>
        <button className="button">Get Started</button>
      </form>
    </section>
  );
};

export default Newsletter;
