import React from 'react';
import './_button.scss';

import classnames from 'classnames';

const button = props => {
  let type = (
    <a
      className={classnames('btn', props.type, {
        'btn--animated': props.animated
      })}
      href={props.href}
    >
      {props.text}
    </a>
  );

  if (props.type === 'text') {
    type = (
      <a href={props.href} className="btn-text">
        {props.text} &rarr;
      </a>
    );
  }
  return type;
};

export default button;
