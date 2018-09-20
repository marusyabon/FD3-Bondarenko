var Product = React.createClass({
    
      displayName: 'Product',
    
      propTypes: {
        productsArr:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired,
            in_stock: React.PropTypes.number.isRequired,
          })
        )
      },
    
      render: function() {
    
        
      },
    
    });