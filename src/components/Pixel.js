import React from 'react';
import classNames from 'classnames';

import './Pixel.scss';

function Pixel(props) {
  const { active, ...rest } = props;
  const className = classNames('pixel', active && 'active');

  return (
    <div className={className} {...rest} />
  );
}

export default Pixel;
