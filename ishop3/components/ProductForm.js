import React from 'react';
import PropTypes from 'prop-types';

class ProductForm extends React.Component {

  static propTypes = {
    product: PropTypes.shape({
      code:PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    })
  }

  state = {
    product: this.props.product
  }

  changeValue = (EO) => {
    this.props.cbChangeValue(EO.target.name), EO.target.value;    
  }

  saveNewValue = () => {
    
  }

  render() {    
    let {name, quantity, price, url} = this.state.product;   

    return (

      <form key={Math.random()}>
        <div>
          <label>Name:</label>
          <input name="name" type="text" defaultValue={name} onChange={this.changeValue}></input>
        </div>
        <div>
          <label>Price:</label>
          <input name="price" type="text" defaultValue={price} onChange={this.changeValue}></input>
        </div>
        <div>
          <label>Quantity:</label>
          <input name="quantity" type="text" defaultValue={quantity} onChange={this.changeValue}></input>
        </div>
        <div>
          <label>Url:</label>
          <input name="url" type="text" defaultValue={url} onChange={this.changeValue}></input>
        </div>
        <input type="submit" value="SAVE" onClick={this.saveNewValue} />
      </form>
    )
  }
}

export default ProductForm;