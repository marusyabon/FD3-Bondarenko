var iShop = React.createClass({
  
  displayName: 'iShop',

  
  getInitialState: function() {
    return { 
      slectedProductId: null,
      productsList: this.props.products
    };
  },

  productSelected: function(code) {
    console.log(this.state.slectedProductId + " " + code);
    this.setState({slectedProductId:code})
  },

  deleteProduct: function(code) {
    var productsFiltered = this.state.productsList.filter( p => {
      return p.code != code;
    });
    this.setState({productsList: [...productsFiltered]})
  },
  
  render: function() {

    var productsCode = this.state.productsList.map( item => 
      React.createElement(Product, {key:item.code,
        code:item.code,
        name:item.name, 
        price:item.price, 
        url:item.url, 
        quantity:item.quantity, 
        cbSelected:this.productSelected,
        cbDeleted:this.deleteProduct,
        slectedProductId:this.state.slectedProductId
      })
    );

    return React.DOM.table( {className:'Product'},
      React.DOM.thead(null, 
        React.DOM.tr(null,
          React.DOM.th(null, 'Name'),
          React.DOM.th(null, 'Price'),
          React.DOM.th(null, 'Url'),
          React.DOM.th(null, 'Quantity'),
          React.DOM.th(null, 'Control'),
        )
      ),
      React.DOM.tbody(null, productsCode)
    )
  }
});