'use strict';
/**
 * StepBar.jsx
 */
import React, { Component } from 'react';
import uuid from 'node-uuid';
import './StepsBar.scss';
/**
 * @class             步骤条组件
 * @author            wojustme
 * @date              2017-03-06
 * @version           0.0.1
 */
class StepBar extends Component {
  constructor(props){
    super(props);
    const { msg } = this.props;
    this.state={
      msg
    }
  }
  render() {
    const { msg } = this.state;
    const { toActiveIndex } = this.props;
    let stepsDiv = [];
    for (let i in msg) {
      if (i == toActiveIndex) {
        stepsDiv.push(<li key={uuid.v4()} className="untilActive">{msg[i]}</li>)
      } else {
        stepsDiv.push(<li key={uuid.v4()}>{msg[i]}</li>)
      }
    }
    return (
      <div
        style={{
          float:"left",
          width:"500px",
          height:"60px"
        }}
      >
        <ul className="steps">
          { stepsDiv }
        </ul>
      </div>
    )
  }
}

export { StepBar as default };
