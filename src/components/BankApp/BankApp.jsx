import React from 'react';

import EasyApp from '../EasyApp/EasyApp';
import FutureApp from '../FutureApp/FutureApp';
import CardApp from '../CardApp/CardApp';

import './BankApp.css';



const BankApp = () => {

  return (
    <section className="b-container">
      <EasyApp />
      <FutureApp />
      <CardApp />
    </section>
  );
};

export default BankApp;
