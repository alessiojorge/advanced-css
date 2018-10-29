import React from 'react';
import './_composition.scss';

const composition = () => {
  return (
    <div className="composition">
      <img
        src={require('../../../assets/nat-1-large.jpg')}
        alt="Nature 1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={require('../../../assets/nat-2-large.jpg')}
        alt="Nature 2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={require('../../../assets/nat-3-large.jpg')}
        alt="Nature 3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default composition;
