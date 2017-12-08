import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import cn from 'classnames';

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
      this.store.barWidth = this.bar.offsetWidth;
    });
  }
  componentDidMount() {
    this.store.barWidth = this.bar.offsetWidth;
    const playingInterval = setInterval(() => {
      this.store.playingProcess += 0.01;
      if (this.store.playingProcess >= 1) {
        clearInterval(playingInterval);
      }
    }, 100);

    const loadingInterval = setInterval(() => {
      this.store.loadingProcess += 0.02;
      if (this.store.loadingProcess >= 1) {
        clearInterval(loadingInterval);
      }
    }, 100);
  }
  componentDidUpdate() {
    this.store.barWidth = this.bar.offsetWidth;
  }

  getBarRef(ref) {
    this.bar = ref;
  }

  handleBtnMouseDown(e) {
    this.store.btnStartX = e.screenX;
    this.store.isBtnPress = true;
    this.store.btnXWas = this.store.playingProcess * (this.store.barWidth - 14);
  }

  render() {
    const btnIconCname = cn(
      'btn-icon loading',
      this.store.loading,
    );
    return (
      <div className="mt-processor">
        <div className="processor-bar-container" ref={r => this.getBarRef(r)}>
          <div
            className="processor-btn"
            style={{ left: this.store.btnToLeftPx }}
            onMouseDown={e => this.handleBtnMouseDown(e)}
            role="button"
            tabIndex={0}
          >
            <div className={btnIconCname} />
          </div>
          <div className="processor-bar">
            <div className="bar" />
            <div className="bar-loading" style={{ width: `${this.store.loadingProcess * 100}%` }} />
          </div>
        </div>
        <div className="processor-time">{this.store.timeString}</div>
      </div>
    );
  }
}
