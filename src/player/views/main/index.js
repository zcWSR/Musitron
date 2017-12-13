
import 'material-design-icons/iconfont/material-icons.css';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Header from '../../components/Header';
import Controller from '../../components/Controller';

import './style.scss';

@observer export default class Main extends React.Component {
  static defaultProps = {
    store: {}
  }

  static propTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
      <div
        className="mt-player"
        role="button"
        tabIndex={-1}
      >
        <Header />
        <div className="mt-content" />
        <Controller store={this.store.controller} />
        <DevTools />
      </div>
    );
  }
}
