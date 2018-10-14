import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
      code:PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      cbSelected: PropTypes.func.isRequired,
      cbDeleted: PropTypes.func.isRequired,
      cbEdited: PropTypes.func.isRequired,
      // productSelected: PropTypes.number,
    };
   
  productClicked = () => {
      this.props.cbSelected(this.props.code);   
  }

  deleteClicked = () => {
      this.props.cbDeleted(this.props.code);   
  }

  editClicked = () => {
      this.props.cbEdited(this.props.code); 
  }

  render() {
    
    return (
      <tr className={this.props.slectedProductId == this.props.code? "selected" : ""} onClick = {this.productClicked}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.url}</td>
        <td>{this.props.quantity}</td>
        <td>
          <button className="Control" onClick={this.editClicked}>
            Edit
          </button>
        </td>
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