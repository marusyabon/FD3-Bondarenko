var Filter = React.createClass({
    
      displayName: 'Filter',

      getInitialState: function() {
        return { 
          isSortActive: false,
          renderedWords: this.props.dataArr,
          filterStr: ''
        };
      },

      sortInit: function(ev) {
        this.setState({ isSortActive: !this.state.isSortActive });
        this.handleList()
      },

      filterInit: function(ev) {
        this.setState({filterStr:ev.target.value});
        this.handleList()
      },

      handleList: function(ev) {
        var wordsList = this.state.renderedWords.slice();
        if (this.state.isSortActive) {
          this.setState({renderedWords:wordsList.sort()});
          console.log("sortOn")
        }
        if (this.state.filterStr) {
          this.setState({renderedWords:wordsList.filter(word => word.indexOf(this.state.filterStr)!=-1)});
          console.log("filterOn")
        }
      },
    
      render: function() {
        var wordsBlock=this.state.renderedWords.map( word =>
          React.DOM.p({key: Math.random()}, word)
        );

        return React.DOM.div(null,
          React.DOM.input({type:'checkbox',defaultChecked:false,name:'switchFilter',onChange:this.sortInit}),
          React.DOM.input({type:'text',name:'filterInput',onChange:this.filterInit}),
          React.DOM.div({className:"wordsWrap"}, wordsBlock),
        );
        
      },
    
    });