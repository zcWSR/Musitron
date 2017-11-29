import React from 'react';
import { ipcRenderer } from 'electron';
import Fa from '../Fa';
import './style.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  hover() {
    this.setState({
      hover: true,
    });
  }

  unhover() {
    this.setState({
      hover: false,
    });
  }

  closeWindow() {
    ipcRenderer.send('player/closeWindow');
  }

  minWindow() {
    ipcRenderer.send('player/minWindow');
  }

  maxWindow() {
    ipcRenderer.send('player/maxWindow');
  }

  render() {
    const { hover } = this.state;
    return (
      <div className="mt-header">
        <div
          className="header-btn-container"
          onMouseEnter={() => this.hover()}
          onMouseLeave={() => this.unhover()}
        >
          <div className="header-btn close">
            {
              hover && <Fa iconName="times" onClick={() => this.closeWindow()} onDrag={() => false} />
            }
          </div>
          <div className="header-btn minimize">
            {
              hover && <Fa iconName="minus" onClick={() => this.minWindow()} onDrag={() => false} />
            }
          </div>
          <div className="header-btn maximize">
            {
              hover && <Fa iconName="plus" onClick={() => this.maxWindow()} onDrag={() => false} />
            }
          </div>
        </div>
      </div>
    );
  }
}
