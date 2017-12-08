import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ iconName, className, ...rest }) {
  const cname = cn(
    'material-icons',
    className,
  );
  const name = iconName.split(' ').join('_');
  return (
    <i className={cname} {...rest} >{name}</i>
  );
}

Icon.defaultProps = {
  iconName: '',
  className: ''
};

Icon.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string
};

