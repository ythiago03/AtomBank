import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
import phoneImg from '../../assets/phone3.svg';

import './FutureApp.css';

const FutureApp = () => {
  return (
    <div className="a-container">
      <div className="a-left">
        <h2><span>Atom</span>Bank for the Future</h2>

        <p>
          All conveniences are at hand. It&apos;s time to go ahead and make dreams come true one by one. Open, manage and withdraw competitive interest savings without going to the bank.
        </p>

        <a href="#">Learn More <BsArrowRight /></a>
      </div>

      <div className="a-right">
        <img src={phoneImg} alt="Phone Image" />
      </div>
    </div>
  );
};

export default FutureApp;
