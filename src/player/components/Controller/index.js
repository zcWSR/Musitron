import React from 'react';
import Icon from '../Icon';
import Processer from './Processer';
import { Observer } from 'mobx-react';

import './style.scss';


export default class Controller extends React.Component {
  constructor(props) {
    super();

    this.state = {
      playing: false,
    };
  }

  play() {
    this.setState({
      playing: true,
    });
  }

  pause() {
    this.setState({
      playing: false,
    });
  }

  render() {
    const { playing } = this.state;

    return (
      <div className="mt-controller">
        {
        playing ?
          <Icon iconName="pause circle filled" className="controller-pause-btn" onClick={() => this.pause()} /> :
          <Icon iconName="play circle filled" className="controller-play-btn" onClick={() => this.play()} />
        }
        <Processer PlayProcess={0.3} laodingProcess={0.6} totalTime={130} loading />
      </div>
    );
  }
}
