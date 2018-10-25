import React from 'react';
import './Header.css';

import { Button } from '../UI/index';

const header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img
          src={require('../../assets/logo-white.png')}
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="text-box">
        <h1 className="header-primary">
          <span className="header-primary-main">Outdoors</span>
          <span className="header-primary-sub">is where life happens</span>
        </h1>

        <Button type="btn-white" href="#" text="Discover our tours" animated />
      </div>
    </div>
  );
};

export default header;
