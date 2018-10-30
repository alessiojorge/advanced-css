import React from 'react';
import './_stories.scss';
import '../Grids/_grids.scss';

import Story from './Story/Story';

import { Button } from '../UI/index';

const stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video
          className="bg-video__content"
          autoplay="true"
          muted="true"
          loop="true"
        >
          <source src={require('../../assets/video.mp4')} type="video/mp4" />
          <source src={require('../../assets/video.webm')} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          We make our clients genuinely happy
        </h2>
      </div>

      <Story
        name="Mary Smith"
        heading="I had a great time with my family"
        img="8"
      />
      <Story
        name="Jack Wilson"
        heading="My lifes completely different now"
        img="9"
      />

      <div className="u-center-text u-margin-top-huge">
        <Button href="#" text="Read all stories" type="text" />
      </div>
    </section>
  );
};

export default stories;
