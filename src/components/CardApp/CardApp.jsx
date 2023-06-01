import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
import cardsImg from '../../assets/cards.svg';

import './CardApp.css';

const CardApp = () => {
  return (
    <div className="c-container">
      <div className="c-left">
        <img src={cardsImg} alt="Phone Image" />
      </div>

      <div className="c-right">
        <h2>Costumable Debit Card</h2>

        <p>
          Choose a debit card design that suits you. Practically withdraw cash and transact worldwide.
        </p>

        <a href="#">Learn More <BsArrowRight /></a>
      </div>
    </div>
  );
};

export default CardApp;
