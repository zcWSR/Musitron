import React from 'react';
import { observer } from 'mobx-react';
import { PropTypes } from 'prop-types';
// import cn from 'classnames';
// import http from 'http';
import Utils from '../../utils';
import Icon from '../Icon';
import BtnGroup from './BtnGroup';
import Processor from './Processor';
import Volume from './Volume';
import PlayList from './PlayList';

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

  componentDidMount() {
    // http.get('http://localhost:8080/music/1.flac', (res) => {
    //   const { statusCode } = res;
    //   const contentLength = 0;
    //   if (statusCode === 200) {

    //   }
    //   res.on('data', (thunk) => {
    //     console.log(`recieve chunk size ${thunk.length}`);
    //   });
    // });
  }

  render() {
    let playOrderIconName = '';

    switch (this.store.playOrder) {
      case Utils.PLAY_ORDER.LIST_LOOP:
        playOrderIconName = 'repeat'; break;
      case Utils.PLAY_ORDER.SINGLE_LOOP:
        playOrderIconName = 'repeat one'; break;
      case Utils.PLAY_ORDER.SHUFFLE:
        playOrderIconName = 'shuffle'; break;
      default:
        playOrderIconName = 'repeat';
    }

    return (
      <div className="mt-controller" >
        <BtnGroup store={this.store} />
        <Processor store={this.store} />
        <Volume store={this.store} />
        <Icon iconName={playOrderIconName} className="controller-icon" onClick={() => this.store.togglePlayOrder()} />
        <PlayList playList={this.store.playList} />
      </div>
    );
  }
}
