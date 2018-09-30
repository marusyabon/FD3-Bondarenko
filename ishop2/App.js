"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var iShop = require('./components/iShop');

var productsArr = [
  {name: 'Алиса в Стране чудес', price: 14, url: 'img/book1.jpg', quantity: 12, id: '1'},
  {name: '1984. Скотный Двор', price: 12, url: 'img/book2.jpg', quantity: 1, id: '2'},
  {name: 'Три товарища', price: 10, url: 'img/book3.jpg', quantity: 14, id: '3'},
  {name: 'Фауст', price: 8, url: 'img/book4.jpg', quantity: 11, id: '4'},
];

ReactDOM.render(
React.createElement(iShop, {products: productsArr}), 
document.getElementById('root') 
);