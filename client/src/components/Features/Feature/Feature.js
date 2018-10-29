import React from 'react';
import './_feature.scss';
import classnames from 'classnames';

const feature = props => {
  return (
    <div className="feature-box">
      <i className={classnames('feature-box__icon', props.icon)} />
      <h3 className="heading-tertiary u-margin-bottom-small">
        {props.heading}
      </h3>
      <p className="feature-box__text">{props.text}</p>
    </div>
  );
};

export default feature;
