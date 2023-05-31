import React from 'react';

import { BiShieldQuarter } from 'react-icons/bi';
import { BsPersonSquare } from 'react-icons/bs';

import './ServiceCard.css';

const ServiceCard = ({ title, desc, icon }) => {

  return (
    <div className="service-wrapper">
      <div className="icon">
        {icon == 'BiShieldQuarter' 
          ? <BiShieldQuarter size={72} color="#13C93E"/> 
          : <BsPersonSquare size={72} color="#13C93E"/>
        }
      </div>

      <div className="description">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  title: '',
  desc: '',
  icon: '',
}.isRequired;
