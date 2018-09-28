var Filter = React.createClass({
    
      displayName: 'Filter',
    
      render: function() {
        var wordsBlock=this.props.dataArr.map( option =>
          React.DOM.div({key: Math.random()} ,
            React.DOM.span(null, option),
          )
        );
        return React.DOM.div(null, wordsBlock );
        
      },
    
    });