import React from 'react';
import './_card.scss';
import classnames from 'classnames';

import { Button } from '../../UI/index';

const card = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div
          className={classnames(
            'card__picture',
            'card__picture--' + props.number
          )}
        />
        <h4 className="card__heading">
          <span
            className={classnames(
              'card__heading-span',
              'card__heading-span--' + props.number
            )}
          >
            {props.heading}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>{props.description[0]}</li>
            <li>{props.description[1]}</li>
            <li>{props.description[2]}</li>
            <li>{props.description[3]}</li>
            <li>{props.description[4]}</li>
          </ul>
        </div>
      </div>
      <div
        className={classnames(
          'card__side',
          'card__side--back',
          'card__side--back-' + props.number
        )}
      >
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">{props.price}</p>
          </div>

          <Button type="btn--white" href="#" text="Book Now!" />
        </div>
      </div>
    </div>
  );
};

export default card;
