import React from 'react';
import { observer } from 'mobx-react';
import { PropTypes } from 'prop-types';
import BtnGroup from './BtnGroup';
import Processor from './Processor';
import Volume from './Volume';

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

  render() {
    return (
      <div className="mt-controller">
        <BtnGroup store={this.store} />
        <Processor store={this.store} />
        <Volume store={this.store} />
      </div>
    );
  }
}
