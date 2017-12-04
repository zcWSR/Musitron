import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ProcessIcon(...props) {
  return (
    <div className="processer-btn" {...props}>
      <div className="btn-icon" />
    </div>
  );
}

export default class Processer extends React.Component {
  static defaultProps = {
    playProcess: 0,
    loadProcess: 0,
    loading: false,
    totalTime: 0,
  };

  static propTypes = {
    playProcess: PropTypes.number,
    loadProcess: PropTypes.number,
    loading: PropTypes.bool,
    totalTime: PropTypes.number
  };

  constructor(props) {
    super(props);

  }

  handlePIMouseDown(e) {
    console.log(this.container);
  }

  render() {
    return (
      <div className="mt-processer" ref={(r) => { this.container = r; }}>
        <ProcessIcon
          onMouseDown={(e) => { this.handlePIMouseDown(e); console.log(e); }}
          onMouseUp={(e) => { console.log(e); }}
        />
      </div>
    );
  }
}
