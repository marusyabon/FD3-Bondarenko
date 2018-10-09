"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Splitter from './components/Splitter';


let str = "Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua. Ut enim ad <br/>minim veniam, quis nostrud exercitation ullamco laboris";

ReactDOM.render(
  <Splitter text={str} />
  , document.getElementById('root') 
);

