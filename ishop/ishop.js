var Product = React.createClass({
    
      displayName: 'Product',
    
      render: function(){
    
        return React.DOM.div( {className:'ProductsWrapper'}, 
            React.DOM.h1( null, "Shop" ),
            React.DOM.div( {className:'ProductItem'}, "Test" ),
        );
      },
    
    });