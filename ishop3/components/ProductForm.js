import React from 'react';
import PropTypes from 'prop-types';

class ProductForm extends React.Component {

  static propTypes = {
    
  };

  render() {        
    return (
      <form>
        <div>
          <label>Name:</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Price:</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Url:</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Quantity:</label>
          <input type="text"></input>
        </div>
      </form>
    )
  }
}

export default ProductForm;