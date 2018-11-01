import React from 'react';
import './_about.scss';
import '../Grids/_grids.scss';

import { Button, Composition } from '../UI/index';

const about = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nisi dolore eaque enim debitis quos saepe temporibus excepturi
            aspernatur mollitia! Nam, dignissimos quos neque itaque corrupti rem
            dolor facere unde!
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit unde
            illum, totam distinctio quidem rem.
          </p>

          <Button href="#" text="Learn more" type="text" />
        </div>

        <div className="col-1-of-2">
          <Composition />
        </div>
      </div>
    </section>
  );
};
export default about;
