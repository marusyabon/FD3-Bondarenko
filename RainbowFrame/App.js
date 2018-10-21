"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './App.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colorsArr: PropTypes.arrayOf(
        PropTypes.string.isRequired
    )};
  
  render() {

    let colors = this.props.colorsArr,
        innerContent = this.props.children;
        console.log(colors.length)

    return (
      (colors.length > 0) ? (
        <div className="RainbowFrame" style={{borderColor: colors[0]}}>
            <RainbowFrame colorsArr={colors.slice(1)}>
              {innerContent}
            </RainbowFrame>
        </div>
        )
      : innerContent

    )
  }
}

let colors = ['blue', 'orange', 'green', 'yellow'];

ReactDOM.render(
  <div className="Wrapper">
    <RainbowFrame colorsArr={colors}>
      <p>RainbowFrame</p>
    </RainbowFrame>
  </div>
  
  , document.getElementById('container') 
);

