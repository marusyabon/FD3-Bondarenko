var Product = React.createClass({
  
  displayName: 'Product',

  propTypes: {
    productsArr:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code:React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        cbDeleted: React.PropTypes.func.isRequired,
        productSelected: React.PropTypes.number.isRequired
      })
    )
  },

  getInitialState: function() {
    return { 
      selected: false,
    };
  },

  productClicked: function() {
      this.props.cbSelected(this.props.code);   
  },

  deleteClicked: function() {
      this.props.cbDeleted(this.props.code);   
  },

  render: function() {
    
    return React.DOM.tr({onClick:this.productClicked},
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null, this.props.url),
            React.DOM.td(null, this.props.quantity),
            React.DOM.td(null, 
              React.DOM.button({className:'Control', onClick:this.deleteClecked},'Delete')
            )
          )
  }
});