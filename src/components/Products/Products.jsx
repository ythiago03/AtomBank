import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

import './Products.css';

const Products = () => {
  return (
    <section className="p-container">
      <ServiceCard 
        title={'Fast and secure cashless payments'}
        desc={'Pay with AtomBank app, online, and in stores, and get added speed security'}
        icon={'BiShieldQuarter'}
      />

      <ServiceCard 
        title={'Control over your account'}
        desc={'Your bank account lets you easyly lock your card in the app. and later reorder it with a tap of a button.'}
        icon={'BsPersonSquare'}
      />
    </section>
  );
};

export default Products;
