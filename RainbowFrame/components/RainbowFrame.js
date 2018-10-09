import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colorsArr: PropTypes.arrayOf(
        PropTypes.string.isRequired
    )};
  
  render() {

    let colorsArr = this.props.colorsArr,
        innerContent = this.props.children;

    let boxes = colorsArr.map(v=>
      innerContent = (<div key={v} className="RainbowFrame" style={{borderColor:v}}>
        {innerContent}
      </div>)
    )

    return boxes[boxes.length-1];
  }

}

export default RainbowFrame;
