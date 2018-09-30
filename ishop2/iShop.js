var iShop = React.createClass({
  
  displayName: 'iShop',
  
  render: function() {

    var productsCode = this.props.products.map( item => 
      React.createElement(Product, {key:item.id,
        name:item.name, 
        price:item.price, 
        url:item.url, 
        quantity:item.quantity, 
      })
    );

    return React.DOM.table(null,
      React.DOM.tbody( {className:'Product'}, productsCode ),
    );
  },

});