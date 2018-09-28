var Filter = React.createClass({
    
      displayName: 'Filter',

      getInitialState: function() {
        return { 
          isFilterActive: false
        };
      },

      initialFilter: function(ev) {
        ev.target.checked 
          ? this.setState( {isFilterActive:true} )
          : console.log('off')
      },

      changeFilter: function(ev) {
        if (this.state.isFilterActive) {
          console.log(ev.target.value);
        }
      },
    
      render: function() {
        var wordsBlock=this.props.dataArr.map( word =>
          React.DOM.p({key: Math.random()}, word)
        );

        return React.DOM.div(null,
          React.DOM.input({type:'checkbox',name:'switchFilter',onChange:this.initialFilter}),
          React.DOM.input({type:'text',name:'filterInput',onChange:this.changeFilter}),
          React.DOM.div({className:"wordsWrap"}, wordsBlock),
        );
        
      },
    
    });