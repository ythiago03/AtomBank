import React from 'react';

import {CiFacebook} from 'react-icons/ci';
import {IoLogoInstagram} from 'react-icons/io';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="f-container">
      <div className="f-wrapper">
        <a className="f-logo" href="#">
          <div className="f-logo__ball"></div>

          <span className="f-logo__text">
            <span>Atom</span>
            Bank
          </span>
        </a>

        <div className="f-about">
          <div className="f-about__content">
            <h3>About</h3>
            <span>
              Lorem ipsum dolor sit amet 
              <br/>
              consectetur adipisicing elit.
            </span>
          </div>

          <div className="f-about__content">
            <h3>Location</h3>
            <span>Costumer Service 0812 - 1234 - 5678</span>
          </div>
        </div>

        <div className="f-socialMedia">
          <span><CiFacebook size={32} color="white" /> @atombank</span>
          <span><IoLogoInstagram size={32} color="white" /> @atombank</span>
        </div>
      </div>

      <span className="github">
        Made with 💜 by
        <a href="https://github.com/ythiago03" rel="noreferrer" target="_blank">
          Ythiago03
        </a>
      </span>

    </footer>
  );
};

export default Footer;
