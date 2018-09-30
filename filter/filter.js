var Filter = React.createClass({
    
      displayName: 'Filter',

      getInitialState: function() {
        return { 
          isFilterActive: false,
          renderedWords: this.props.dataArr
        };
      },

      initialFilter: function(ev) {
        ev.target.checked 
          ? this.setState( {isFilterActive:true} )
          : this.setState( {isFilterActive:false} )
      },

      changeFilter: function(ev) {
        if (this.state.isFilterActive) {
          var newArr = this.state.renderedWords.filter(word => word.includes(ev.target.value));
          this.setState({renderedWords:newArr.sort()});
        }
      },
    
      render: function() {
        var wordsBlock=this.state.renderedWords.map( word =>
          React.DOM.p({key: Math.random()}, word)
        );

        return React.DOM.div(null,
          React.DOM.input({type:'checkbox',name:'switchFilter',onChange:this.initialFilter}),
          React.DOM.input({type:'text',name:'filterInput',onChange:this.changeFilter}),
          React.DOM.div({className:"wordsWrap"}, wordsBlock),
        );
        
      },
    
    });