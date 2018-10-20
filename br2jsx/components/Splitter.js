import React from 'react';
import PropTypes from 'prop-types';

import './Splitter.css';

class Splitter extends React.Component {

  static propTypes = {
    text: PropTypes.string
  }

  render() {
  
  let strArr = this.props.text.split(/<br\s?\/?>/);
  let arr= [];
  strArr.forEach(element => {
    arr.push(element, <br />)
  });
        
    return (
      <div>
        {arr}
      </div>
    )
  }
}

export default Splitter;