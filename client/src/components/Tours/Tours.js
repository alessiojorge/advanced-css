import React from 'react';
import './_tours.scss';
import '../Grids/_grids.scss';

import Card from './Card/Card';
import { Button } from '../UI/index';

const tours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <Card
            number="1"
            heading="The sea explorer"
            description={[
              '3 day tour',
              'Up to 30 people',
              '2 tour guildes',
              'Sleep in cozy hotels',
              'Difficulty: Easy'
            ]}
            price="$297"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            number="2"
            heading="The forest hiker"
            description={[
              '5 day tour',
              'Up to 35 people',
              '3 tour guildes',
              'Sleep in the tents provided',
              'Difficulty: Medium'
            ]}
            price="$497"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            number="3"
            heading="The sea explorer"
            description={[
              '7 day tour',
              'Up to 40 people',
              '6 tour guildes',
              'Sleep in the tents provided',
              'Difficulty: Hard'
            ]}
            price="$897"
          />
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Button type="btn--green" href="#" text="Discover all tours" />
      </div>
    </section>
  );
};

export default tours;
