import React from 'react';
import { ipcRenderer } from 'electron';
import Fa from '../Fa';
import './style.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      maximize: false,
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
        maximize: false,
      });
    } else {
      ipcRenderer.send('player/maxWindow');
      this.setState({
        maximize: true,
      });
    }
  }

  render() {
    return (
      <div className="mt-header">
        <div className="header-btn-container">
          <div>
            <Fa iconName="circle" className="header-btn close-bg" />
            <Fa iconName="circle" className="header-btn minimize-bg" />
            <Fa iconName="circle" className="header-btn maximize-bg" />
          </div>
          <div className="fix">
            <Fa iconName="times-circle" className="header-btn close" onClick={() => this.closeWindow()} />
            <Fa iconName="minus-circle" className="header-btn minimize" onClick={() => this.minWindow()} />
            <Fa iconName="plus-circle" className="header-btn maximize" onClick={() => this.maxWindow()} />
          </div>
        </div>
        
      </div>
    );
  }
}
