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
        var ProductCard=this.props.productsArr.map( option =>
          React.DOM.div({key:option.gtin, className:'ProductWrapper'},
            React.DOM.div({className:'ProductImage'},
              React.DOM.img({src: option.url}),
            ),
            React.DOM.p({className:'ProductName'}, option.name),
            React.DOM.p({className:'ProductPrice'}, option.price + " р."),
            React.DOM.span({className:'InStock'}, "In stock:" + option.in_stock),

          )
        );
        return React.DOM.div(null,
          React.DOM.h1({className:'PageTitle'}, "iShop"),
          React.DOM.div({className:'ProductsWrap'}, ProductCard),
        );
        
      },
    
    });