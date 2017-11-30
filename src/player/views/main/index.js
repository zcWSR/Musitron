import 'font-awesome-webpack';

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Controller from '../../components/Controller';

import './style.scss';

export default class Main extends React.Component {
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
    // const { className, text } = this.props;
    return (
      <div className="mt-player">
        <Header />
        <div className="mt-content"></div>
        <Controller />
      </div>
    );
  }
}
