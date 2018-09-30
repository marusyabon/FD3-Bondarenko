var Filter = React.createClass({
    
      displayName: 'Filter',

      propTypes: {
        dataArr:React.PropTypes.arrayOf(
          React.PropTypes.string
        )
      },

      getInitialState: function() {
        return { 
          isSortActive: false,
          renderedWords: this.props.dataArr,
          filterStr: ''
        };
      },

      sortInit: function() {
        this.setState({ isSortActive: !this.state.isSortActive }, () => { this.handleList()});
      },

      filterInit: function(ev) {
        this.setState({filterStr: ev.target.value}, () => { this.handleList()});
      },

      handleList: function() {
        var wordsList = this.props.dataArr.slice();
        if (this.state.isSortActive) {
          this.setState({renderedWords:wordsList.sort()});
        }
        if (this.state.filterStr) {
          this.setState({renderedWords:wordsList.filter(word => word.indexOf(this.state.filterStr)!=-1)});
        }
        if (!this.state.isSortActive && !this.state.filterStr) {
          this.setState({renderedWords:this.props.dataArr});
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