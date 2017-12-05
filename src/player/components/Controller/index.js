import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import Icon from '../Icon';
import Processor from './Processor';

import './style.scss';


@observer export default class Controller extends React.Component {
  static defaultProps = {
    store: {},
  };

  static propTypes = {
    store: PropTypes.object,
  }

  constructor(props) {
    super(props);

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
    const { store } = this.props;
    const { playing } = this.state;

    return (
      <div className="mt-controller">
        {
        playing ?
          <Icon iconName="pause circle filled" className="controller-pause-btn" onClick={() => this.pause()} /> :
          <Icon iconName="play circle filled" className="controller-play-btn" onClick={() => this.play()} />
        }
        <Processor store={store.processor} />
      </div>
    );
  }
}
