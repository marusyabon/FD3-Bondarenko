var iShop = React.createClass({
  
  displayName: 'iShop',

  
  getInitialState: function() {
    return { 
      slectedProductId: null,
    };
  },

  productSelected: function(code) {
    console.log(code);
    this.setState({slectedProductId:code})
  },
  
  render: function() {

    var productsCode = this.props.products.map( item => 
      React.createElement(Product, {key:item.code,
        name:item.name, 
        price:item.price, 
        url:item.url, 
        quantity:item.quantity, 
        cbSelected:this.productSelected
      })
    );

    return React.DOM.table( {className:'Product'},
      React.DOM.thead(null, 
        React.DOM.tr(null,
          React.DOM.td(null, 'Name'),
          React.DOM.td(null, 'Price'),
          React.DOM.td(null, 'Url'),
          React.DOM.td(null, 'Quantity'),
          React.DOM.td(null, 'Control'),
        )
      ),
      React.DOM.tbody(null, productsCode),
    )
  }
});