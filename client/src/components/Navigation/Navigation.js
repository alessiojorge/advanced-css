import React from 'react';
import './_navigation.scss';

const navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              <span>01</span> About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#features" className="navigation__link">
              <span>02</span> Features
            </a>
          </li>
          <li className="navigation__item">
            <a href="#tours" className="navigation__link">
              <span>03</span>
              Tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#stories" className="navigation__link">
              <span>04</span>
              Testimonies
            </a>
          </li>
          <li className="navigation__item">
            <a href="#booking" className="navigation__link">
              <span>05</span> Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default navigation;
