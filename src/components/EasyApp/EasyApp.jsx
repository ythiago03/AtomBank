import React from 'react';

import StoreBtn from '../StoreBtn/StoreBtn';

import appStoreIcon from '../../assets/appStore.svg';
import playStoreIcon from '../../assets/playstore.svg';
import phoneImg from '../../assets/phone2.svg';

import './EasyApp.css';

const EasyApp = () => {
  return (
    <div className="e-container">
      <div className="e-left">
        <img src={phoneImg} alt="" />
      </div>

      <div className="e-right">
        <h1><span>Atom</span>Bank App for Your Easy</h1>

        <p>
          The best place to transact and save money. More organized finances
          no longer a discourse. Enjoy the life you want, without wasting time on unnecessary financial matters
        </p>

        <div className="buttons">
          <StoreBtn imgUrl={appStoreIcon} text={'download on the'} appName={'app store'} />
          <StoreBtn imgUrl={playStoreIcon} text={'get in on'} appName={'google play'} />
        </div>
      </div>
    </div>
  );
};

export default EasyApp;
