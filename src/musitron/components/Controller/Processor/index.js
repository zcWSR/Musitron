import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import cn from 'classnames';
import Utils from '../../../utils';

import './style.scss';

@observer
export default class Processor extends React.Component {
  static defaultProps = {
    store: {}
  };

  static propTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.store = props.store;
    window.addEventListener('resize', () => {
      this.store.processorBarWidth = this.bar.offsetWidth;
    });

    window.addEventListener('mousemove', (e) => {
      const controller = this.store;
      if (controller.isProcessorBtnPress) {
        const playingProcess =
          ((e.screenX - controller.processorBtnStartX) + controller.processorBtnXWas) /
          (controller.processorBarWidth - 14);
        if (playingProcess <= 0) {
          controller.playingProcess = 0;
        } else if (playingProcess >= 1) {
          controller.playingProcess = 1;
        } else {
          controller.playingProcess = playingProcess;
        }
      }
    });

    window.addEventListener('mouseup', () => {
      const controller = this.store;
      controller.isProcessorBtnPress = false;
      controller.processorBtnXWas = controller.processorBtnToLeftPx;
    });
  }
  componentDidMount() {
    this.store.processorBarWidth = this.bar.offsetWidth;
  }
  componentDidUpdate() {
    this.store.processorBarWidth = this.bar.offsetWidth;
  }

  getBarRef(ref) {
    this.bar = ref;
  }

  handleBtnMouseDown(e) {
    const controller = this.store;
    controller.processorBtnStartX = e.screenX;
    controller.isProcessorBtnPress = true;
    controller.processorBtnXWas = controller.processorBtnToLeftPx;
  }

  handleBarMouseDown(e) {
    const offsetX = Utils.getOffsetX(e.target);
    let process = e.clientX - offsetX - 2;
    if (process < 0) { process = 0; }
    this.store.playingProcess = process / (this.store.processorBarWidth - 14).toFixed(1);
  }

  render() {
    const btnIconCname = cn(
      'btn-icon',
      this.store.loading
    );
    return (
      <div className="mt-processor">
        <div className="processor-bar-container" ref={r => this.getBarRef(r)}>
          <div
            className="processor-btn"
            style={{ left: `${this.store.processorBtnToLeftPx}px` }}
            onMouseDown={e => this.handleBtnMouseDown(e)}
            role="button"
            tabIndex={0}
          >
            <div className={btnIconCname} />
          </div>
          <div
            className="processor-bar"
            onMouseDown={e => this.handleBarMouseDown(e)}
            role="button"
            tabIndex={0}
          >
            <div className="bar" />
            <div className="bar process" style={{ width: `${this.store.playingProcess * 100}%` }} />
            <div className="bar loading" style={{ width: `${this.store.loadingProcess * 100}%` }} />
          </div>
        </div>
        <div className="processor-time">{this.store.timeString}</div>
      </div>
    );
  }
}
