import React, { useState } from 'react';

import './Header.css';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if(document.documentElement.clientWidth <= 1090){
      return {top: menuOpened && '100px'};
    }
  };

  const teste = (menuOpened, child) => { 
    switch (child){
    case 1:
      return {
        transform: menuOpened && 'rotate(45deg)',
        top: menuOpened &&'8px'
      };

    case 2:
      return {
        opacity: menuOpened && '0',
        transform: menuOpened && 'translateX(-100%)'
      };

    case 3:
      return {
        transform: menuOpened && 'rotate(-45deg)',
        top: menuOpened &&'8px'
      };

    default:
      break;  
    }
  };

  return (
    <header className="h-container">

      <a className="h-logo" href="#">
        <div className="logo__ball"></div>

        <span className="logo__text">
          <span>Atom</span>
          Bank
        </span>
      </a>

      <div className="h-wrapper" style={getMenuStyle(menuOpened)}>
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
          <button className="button buttonWhite">Log in</button>
          <button className="button">Register</button>
        </div>
      </div>

      <div 
        className="hamburguer"
        onClick={() => setMenuOpened((previousValue) => !previousValue)}
        
      >
        <span style={teste(menuOpened, 1)} ></span>
        <span style={teste(menuOpened, 2)} ></span>
        <span style={teste(menuOpened, 3)} ></span>
      </div>
    </header>
  );
};

export default Header;
