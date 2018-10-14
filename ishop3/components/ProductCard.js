import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {

  static propTypes = {
    product: PropTypes.shape({
      code:PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  };

  render() {
    let {name, quantity, price} = this.props.product;
        
    return (
      <div className="productCard">
        <h1>{name}</h1>
        <p>In stock: {quantity}</p>
        <p>Price: {price}</p>
      </div>
    )
  }
}

export default ProductCard;