import React from 'react';
import { ipcRenderer } from 'electron';
import Icon from '../Icon';
import './style.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      maximize: false
    };
  }

  closeWindow() {
    ipcRenderer.send('player/closeWindow');
  }

  minWindow() {
    ipcRenderer.send('player/minWindow');
  }

  maxWindow() {
    if (this.state.maximize) {
      ipcRenderer.send('player/unmaxWindow');
      this.setState({
        maximize: false
      });
    } else {
      ipcRenderer.send('player/maxWindow');
      this.setState({
        maximize: true
      });
    }
  }

  render() {
    return (
      <div className="mt-header">
        <div className="header-btn-container">
          <div>
            <Icon iconName="lens" className="header-btn close-bg" onClick={() => this.maxWindow()} />
            <Icon iconName="lens" className="header-btn minimize-bg" onClick={() => this.maxWindow()} />
            <Icon iconName="lens" className="header-btn maximize-bg" onClick={() => this.maxWindow()} />
          </div>
          <div className="fix">
            <Icon iconName="cancel" className="header-btn close" onClick={() => this.closeWindow()} />
            <Icon iconName="remove circle" className="header-btn minimize" onClick={() => this.minWindow()} />
            <Icon iconName="add circle" className="header-btn maximize" onClick={() => this.maxWindow()} />
          </div>
        </div>
      </div>
    );
  }
}
