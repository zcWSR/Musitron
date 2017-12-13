import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Icon from '../../Icon';

import './style.scss';

@observer
export default class Volume extends React.Component {
  static defaultProps = {
    store: {}
  }

  static propTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.store = props.store;

    document.addEventListener('mousemove', (e) => {
      const controller = this.store;
      if (controller.isVolumeBtnPress) {
        const volume =
          ((e.screenX - controller.volumeBarStartX) +
          controller.volumeBtnXWas) / (100 - 10);
        if (volume < 0) {
          controller.volume = 0;
        } else if (volume >= 1) {
          controller.volume = 1;
        } else {
          controller.volume = volume;
        }
      }
    });

    document.addEventListener('mouseup', () => {
      const controller = this.store;
      controller.isVolumeBtnPress = false;
      controller.volumeBtnXWas = controller.volumeBtnToLeftPx;
    });
  }

  handelBtnMouseDown(e) {
    const controller = this.store;
    controller.volumeBarStartX = e.screenX;
    controller.isVolumeBtnPress = true;
    controller.volumeBtnXWas = controller.volumeBtnToLeftPx;
  }

  handleBarMouseDown(e) {
    console.log(e.clientX);
  }

  render() {
    let volumeIconName = '';

    if (this.store.volume > 0.6666) {
      volumeIconName = 'volume up';
    } else if (this.store.volume > 0.3333) {
      volumeIconName = 'volume down';
    } else if (this.store.volume > 0) {
      volumeIconName = 'volume mute';
    } else {
      volumeIconName = 'volume off';
    }

    return (
      <div className="mt-volume">
        <Icon iconName={volumeIconName} className="volume-icon" />
        <div
          className="volume-bar-container"
          onMouseDown={e => this.handleBarMouseDown(e)}
          role="button"
          tabIndex={0}
        >
          <div
            className="volume-btn"
            style={{ left: `${this.store.volumeBtnToLeftPx}px` }}
            onMouseDown={e => this.handelBtnMouseDown(e)}
            role="button"
            tabIndex={0}
          />
          <div className="volume-bar">
            <div className="bar" />
          </div>
        </div>
      </div>
    );
  }
}
