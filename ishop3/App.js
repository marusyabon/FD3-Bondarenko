"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

let productsList=require('./products.json');

ReactDOM.render(
  <Ishop 
    products={productsList}
  />
  , document.getElementById('root') 
);

