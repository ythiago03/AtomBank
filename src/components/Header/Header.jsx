import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="h-container">

      <a className="h-logo" href="#">
        <div className="logo__ball"></div>

        <span className="logo__text">
          <span>Atom</span>
          Bank
        </span>
      </a>

      <nav className="h-navbar">
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>

      <div className="h-buttons">
        <button className="button">Log in</button>
        <button className="button">Register</button>
      </div>

    </header>
  );
};

export default Header;
