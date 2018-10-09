"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import RainbowFrame from './components/RainbowFrame';

let colors = ['blue', 'orange', 'green', 'yellow'];

ReactDOM.render(
  <div className="Wrapper">
    <RainbowFrame colorsArr={colors}>
        <h1>RainbowFrame</h1>
    </RainbowFrame>
  </div>
  
  , document.getElementById('container') 
);

