import React from 'react';
import './_story.scss';
import '../../Grids/_grids.scss';

const story = props => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img
            src={require(`../../../assets/nat-${props.img}.jpg`)}
            alt="Person on a tour"
            className="story__image"
          />

          <figcaption className="story__caption">{props.name}</figcaption>
        </figure>

        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.heading}
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ut
            animi vero similique cumque? Harum iusto nihil quam laborum mollitia
            facilis fugit inventore, qui nostrum unde ut ab iste perferendis?
            Harum iusto nihil quam laborum mollitia facilis fugit inventore, qui
            nostrum unde ut ab iste perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default story;
