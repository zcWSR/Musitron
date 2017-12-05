import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import cn from 'classnames';

import './style.scss';

@observer
export default class Processor extends React.Component {
  static defaultProps = {
    store: {},
  };

  static propTypes = {
    store: PropTypes.object,
  }

  handleBtnMouseDown(e) {
    const { store } = this.props;
    store.startX = e.clientX;
    store.beforeProcessChange = store.playProcess;
  }

  render() {
    const {
      playProcess,
      loading,
      loadingProcess,
    } = this.props.store;

    const btnIconCname = cn(
      'btn-icon loading',
      loading,
    );
    return (
      <div className="mt-processor">
        <div className="processor-bar-container">
          <div
            className="processor-btn"
            style={{ left: `${playProcess}px` }}
            onMouseDown={e => this.handleBtnMouseDown(e)}
            role="button"
            tabIndex={0}
          >
            <div className={btnIconCname} />
          </div>
          <div className="processor-bar">
            <div className="bar" />
            <div className="bar-loading" style={{ width: `${loadingProcess * 100}%` }} />
          </div>
        </div>
      </div>
    );
  }
}
