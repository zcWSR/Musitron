
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

  handleMouseUp() {
    const { controller } = this.store;
    controller.isBtnPress = false;
    controller.btnXWas = controller.btnToLeftPx;
  }

  handleMouseMove(e) {
    const { controller } = this.store;
    if (controller.isBtnPress) {
      const playingProcess =
        ((e.screenX - controller.btnStartX) + controller.btnXWas) / (controller.barWidth - 14);
      if (playingProcess <= 0) {
        controller.playingProcess = 0;
      } else if (playingProcess >= 1) {
        controller.playingProcess = 1;
      } else {
        controller.playingProcess = playingProcess;
      }
    }
  }

  render() {
    return (
      <div
        className="mt-player"
        onMouseUp={e => this.handleMouseUp(e)}
        onMouseMove={e => this.handleMouseMove(e)}
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
