import React from 'react';
import './_popup.scss';

import { Button } from '../UI/index';

const popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img
            src={require('../../assets/nat-8.jpg')}
            alt="Tour"
            className="popup__img"
          />
          <img
            src={require('../../assets/nat-9.jpg')}
            alt="Tour 2"
            className="popup__img"
          />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            ducimus dolorem? Corporis in vero necessitatibus repudiandae ipsa
            qui, incidunt, enim ullam distinctio eligendi ipsam aut culpa
            repellendus assumenda. Facere, dicta? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            saepe tempore dolorem sint cupiditate incidunt eveniet totam
            nesciunt autem rem delectus recusandae pariatur magni aliquid, fugit
            unde nam iste beatae!
          </p>
          <Button type="btn--green" href="#" text="Book Now" />
        </div>
      </div>
    </div>
  );
};
export default popup;
