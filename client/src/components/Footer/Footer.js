import React from 'react';
import './_footer.scss';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src={require('../../assets/logo-green-2x.png')}
          alt="Full logo"
          className="footer__logo"
        />
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href={'google.com'} className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href={'google.com'} className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href={'google.com'} className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href={'google.com'} className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href={'google.com'} className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            <a href={'google.com'} className="footer__link">
              Copyright &copy;
            </a>
            <br />
            Built by Tarma Katz <br />
            original design belongs to Jonas Schmedtmann
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
