import React from 'react';

import './StoreBtn.css';

const StoreBtn = ({imgUrl, appName, text}) => {
  return (
    <button className="store__btn">
      <img src={imgUrl} alt={appName + ' Logo'} />
      <div className="desc">
        <span>{text}</span>
        <span>{appName}</span>
      </div>
    </button>
  );
};

export default StoreBtn;

StoreBtn.propTypes = {
  imgUrl: '',
  appName: '',
  text: '',
}.isRequired;
