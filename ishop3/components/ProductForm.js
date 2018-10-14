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
    name: this.props.name,
    quantity: this.props.quantity,
    price: this.props.price,
    url: this.props.url,
  }

  changeValue = (EO) => {
    let val = EO.target.value;
    let property = EO.target.name;
    this.setState({property: val});
  }

  saveNewValue = () => {

  }

  render() {    
    let {name, quantity, price, url} = this.state.product;   

    return (

      <form>
        <div>
          <label>Name:</label>
          <input name="name" type="text" value={name} onChange={this.changeValue}></input>
        </div>
        <div>
          <label>Price:</label>
          <input name="price" type="text" value={price} onChange={this.changeValue}></input>
        </div>
        <div>
          <label>Quantity:</label>
          <input name="quantity" type="text" value={quantity} onChange={this.changeValue}></input>
        </div>
        <div>
          <label>Url:</label>
          <input name="url" type="text" value={url} onChange={this.changeValue}></input>
        </div>
        <input type="submit" value="SAVE" onClick={this.saveNewValue} />
      </form>
    )
  }
}

export default ProductForm;