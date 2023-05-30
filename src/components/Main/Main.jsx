import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
import desktopImg from '../../assets/desktop.svg';
import phoneImg from '../../assets/phone.svg';

import './Main.css';

const Main = () => {
  return (
    <main className="m-container">
      {/* left-side */}
      <section className="m-wrapper__left">
        <h1>
          Easy Way to 
          <br/>
          Save your Money 
          <br/>
          with
          <span className="underlined"><span> Atom</span>Bank.</span>
        </h1>

        <p>
          The best place to transact and save money.We make all payments easier
          <br/>
          and simplier. Receive and send payment funds without cash.
        </p>

        <div className="m-buttons">
          <button className="button">Download Now</button>
          <a href="#">See How It Works <BsArrowRight /></a>
        </div>
      </section>

      {/* right-side */}
      <section className="m-wrapper__right">
        <img src={desktopImg} alt="Desktop Image" />
        <img src={phoneImg} alt="Phone Image" />
      </section>

    </main>
  );
};

export default Main;
