import React from 'react';
import './Button.css';

import classnames from 'classnames';

const button = props => {
  return (
    <a
      className={classnames('btn', props.type, {
        'btn-animated': props.animated
      })}
      href={props.href}
    >
      {props.text}
    </a>
  );
};

export default button;
