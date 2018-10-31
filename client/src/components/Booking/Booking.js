import React from 'react';
import './_booking.scss';

import Input from '../UI/Form/Input/Input';
import { Button } from '../UI/index';

const booking = () => {
  return (
    <section className="section-booking">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now!</h2>
              </div>

              <div className="form__group">
                <Input type="text" id="name" placeholder="Full Name" />
              </div>

              <div className="form__group">
                <Input type="email" id="email" placeholder="Email Address" />
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    name="size"
                    className="form__radio-input"
                    id="small"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    name="size"
                    className="form__radio-input"
                    id="large"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large tour group
                  </label>
                </div>
              </div>

              <div className="form__group" style={{ marginTop: '5rem' }}>
                <Button href="#" text="Next" type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default booking;
