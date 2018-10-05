var iShop = React.createClass({
  
  displayName: 'iShop',

  
  getInitialState: function() {
    return { 
      slectedProductId: null,
      productSList: this.props.products
    };
  },

  productSelected: function(code) {
    console.log(code);
    this.setState({slectedProductId:code})
  },

  deleteProduct: function(code) {
    var productsFiltered = this.state.productsArr.filter( p => {
      return p.code != code;
    });
    this.setState({productSList: [...productsFiltered]})
  },
  
  render: function() {

    var productsCode = this.state.productSList.map( item => 
      React.createElement(Product, {key:item.code,
        code:item.code,
        name:item.name, 
        price:item.price, 
        url:item.url, 
        quantity:item.quantity, 
        cbSelected:this.productSelected,
        cbDeleted:this.deleteProduct,
        productSelected:this.slectedProductId
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