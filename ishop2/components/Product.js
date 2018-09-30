var React = require('react');

require('./Product.css');

var Product = require('./Product');

var Product = React.createClass({
    
      displayName: 'Product',
    
      propTypes: {
        productsArr:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired,
            quantity: React.PropTypes.number.isRequired,
          })
        )
      },
    
      render: function() {
        return React.DOM.tr(null,
          React.DOM.td(null, this.props.name),
          React.DOM.td(null, this.props.price),
          React.DOM.td(null, this.props.url),
          React.DOM.td(null, this.props.quantity)
        )
      }
    });

    module.exports = Product;