import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
      code:React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number.isRequired,
      cbSelected: React.PropTypes.func.isRequired,
      cbDeleted: React.PropTypes.func.isRequired,
      productSelected: React.PropTypes.number.isRequired
    };
   
  productClicked = () => {
      this.props.cbSelected(this.props.code);   
  }

  deleteClicked = () => {
      this.props.cbDeleted(this.props.code);   
  }

  render() {
    
    return (
      <tr className={this.props.slectedProductId == this.props.code? "selected" : ""} onClick = {this.productClicked}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.url}</td>
        <td>{this.props.quantity}</td>
        <td>
          <button className="Control" onClick={this.deleteClicked}>
            Delete
          </button>
        </td>
      </tr>

    )
  }
}

export default Product;