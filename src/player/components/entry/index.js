import React from 'react';
import PropTypes from 'prop-types';

export default class Entry extends React.Component {
  static defaultProps = {
    text: '',
    className: 'hello',
  }

  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
  }

  componentWillMount() {

  }
  render() {
    const { className, text } = this.props;
    return (
      <h3 className={className}>{text}</h3>
    );
  }
}
