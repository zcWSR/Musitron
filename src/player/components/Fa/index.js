import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default function Fa({ iconName, className, ...rest }) {
  const cname = cn(
    'fa',
    `fa-${iconName}`,
    className,
  );
  return (
    <i className={cname} {...rest} />
  );
}

Fa.defaultProps = {
  iconName: '',
  className: [],
};

Fa.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
};

