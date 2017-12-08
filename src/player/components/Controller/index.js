import React from 'react';
import { observer } from 'mobx-react';
import { PropTypes } from 'prop-types';
import Icon from '../Icon';
import Processor from './Processor';

import './style.scss';


@observer export default class Controller extends React.Component {
  static defaultProps = {
    store: {}
  };

  static propTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  play() {
    this.store.playing = true;
  }

  pause() {
    this.store.playing = false;
  }

  render() {
    return (
      <div className="mt-controller">
        {
          this.store.playing ?
            <Icon iconName="pause circle filled" className="controller-pause-btn" onClick={() => this.pause()} /> :
            <Icon iconName="play circle filled" className="controller-play-btn" onClick={() => this.play()} />
        }
        <Processor store={this.store} />
      </div>
    );
  }
}
