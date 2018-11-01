import React from 'react';
import './_features.scss';
import '../Grids/_grids.scss';

import Feature from './Feature/Feature';

const features = () => {
  return (
    <section className="section-features" id="features">
      <div className="row">
        <div className="col-1-of-4">
          <Feature
            icon="icon-basic-world"
            heading="Explore the world"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            asperiores nulla dolores."
          />
        </div>
        <div className="col-1-of-4">
          <Feature
            icon="icon-basic-compass"
            heading="Meet nature"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            asperiores nulla dolores."
          />
        </div>
        <div className="col-1-of-4">
          <Feature
            icon="icon-basic-map"
            heading="Find your way"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            asperiores nulla dolores."
          />
        </div>
        <div className="col-1-of-4">
          <Feature
            icon="icon-basic-heart"
            heading="Live a healthier life"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            asperiores nulla dolores."
          />
        </div>
      </div>
    </section>
  );
};

export default features;
