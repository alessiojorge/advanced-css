import React from 'react';
import './_header.scss';

import { Button } from '../UI/index';

const header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img
          src={require('../../assets/logo-white.png')}
          alt="Logo"
          className="header__logo"
        />
      </div>

      <div className="header__text-box">
        <h1 className="header-primary">
          <span className="header-primary--main">Outdoors</span>
          <span className="header-primary--sub">is where life happens</span>
        </h1>

        <Button type="btn--white" href="#" text="Discover our tours" animated />
      </div>
    </header>
  );
};

export default header;
