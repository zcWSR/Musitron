import 'material-design-icons/iconfont/material-icons.css';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Header from '../../components/Header';
import Controller from '../../components/Controller';

import './style.scss';

@observer export default class Main extends React.Component {
  static defaultProps = {
    store: {},
  }

  static propTypes = {
    store: PropTypes.object,
  }

  componentWillMount() {

  }

  handleMouseUp() {
    const { controller } = this.props.store;
    controller.btnPress = false;
  }

  handleMouseMove(e) {
    const { controller } = this.props.store;
    controller.playProcess = (e.currentX - this.startX) + controller.beforeProcessChange;
  }


  render() {
    const { store } = this.props;
    return (
      <div
        className="mt-player"
        onMouseUp={e => this.handleMouseUp(e)}
        onMouseMove={e => this.handleMouseMove(e)}
        role="button"
        tabIndex={0}
      >
        <Header />
        <div className="mt-content" />
        <Controller store={store.controller} />
      </div>
    );
  }
}
