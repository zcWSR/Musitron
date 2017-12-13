import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Icon from '../../Icon';
import './style.scss';

@observer
export default class BtnGroup extends React.Component {
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

  play() {
    this.store.playing = true;
  }

  pause() {
    this.store.playing = false;
  }

  render() {
    return (
      <div className="controller-btn-group">
        <Icon iconName="skip previous" className="btn-group-btn previous" />
        {
          this.store.playing ?
            <Icon iconName="pause" className="btn-group-btn pause" onClick={() => this.pause()} /> :
            <Icon iconName="play arrow" className="btn-group-btn play" onClick={() => this.play()} />
        }
        <Icon iconName="skip next" className="btn-group-btn next" />
      </div>
    );
  }
}
