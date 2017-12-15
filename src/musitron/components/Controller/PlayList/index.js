import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Icon from '../../Icon';

import './style.scss';

@observer
export default class PlayList extends React.Component {
  static defaultProps = {
    playList: {}
  }

  static propTypes = {
    playList: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.playList = props.playList;
  }

  render() {
    return (
      <div className="mt-playlist">
        <Icon iconName="queue music" className="playlist-icon" />
        <span className="playlist-length">{this.playList.list.length}</span>
      </div>
    );
  }
}
