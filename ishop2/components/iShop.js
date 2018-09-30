var React = require('react');

require('./ishop.css');

var Product = require('./Product');

var Product = React.createClass({
    
      displayName: 'iShop',

      var productsCode = this.props.products.map( item => 
        React.createElement(Product, {key:item.id,
          name:item.name, 
          price:item.price, 
          url:item.url, 
          quantity:item.quantity, 
        })
      )
    
     
      render: function() {
        return React.DOM.table({className:iShop},
          React.DOM.tr( {className:'Product'}, productsCode ),
        );
      },
    
    });