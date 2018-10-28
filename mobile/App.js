"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[ 
  {id:101, secondName:"Иванов", name:"Иван", balance:200}, 
  {id:105, secondName:"Сидоров", name:"Сидор", balance:250}, 
  {id:110, secondName:"Петров", name:"Пётр", balance:180},
  {id:120, secondName:"Григорьев", name:"Григорий", balance:220},
  {id:121, secondName:"Павлов", name:"Павел", balance:-20},
  {id:122, secondName:"Сергеев", name:"Сергей", balance:-320},
  {id:123, secondName:"Юрьев", name:"Юрий", balance:0},
];

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

