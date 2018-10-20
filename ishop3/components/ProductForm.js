import React from 'react';
import PropTypes from 'prop-types';

class ProductForm extends React.Component {

  static propTypes = {
    product: PropTypes.shape({
      code:PropTypes.number,
      name: PropTypes.string,
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      url: PropTypes.string,
    }),
    cbSetValue: PropTypes.func.isRequired,
    cbCancelEdit: PropTypes.func.isRequired,
    newProductId: PropTypes.number
  }

  state = {
    product: this.props.product ? this.props.product : null,
    isValid: false
  }

  changeValue = (EO) => { 
    let newProduct = {...this.state.product};
    let key = EO.target.name;
    let val = EO.target.value;

    newProduct[key] = val;

    this.setState({
      product: newProduct
    })
  }

  saveNewValue = (EO) => {
    EO.preventDefault();

    let {name, quantity, price, url} = this.state.product;

    if(name && url && !isNaN(+quantity) && !isNaN(+price)) {
      this.setState({
        isValid: true
      })
      this.props.cbSetValue(this.state.product);
    }
  }
  
  cancelEdit = () => {
    this.props.cbCancelEdit();
  }

  render() {    
    let {name, quantity, price, url} = this.state.product;   

    return (

      <form className={this.state.isValid ? "" : "error"}>
        <div>
          <label>Name:</label>
          <input name="name" type="text" defaultValue={name} onChange={this.changeValue}></input>
          <span className="inputMessage">The name must have at least one letter</span>
        </div>
        <div>
          <label>Price:</label>
          <input name="price" type="text" defaultValue={price} onChange={this.changeValue}></input>
          <span className="inputMessage">It must be number</span>
        </div>
        <div>
          <label>Quantity:</label>
          <input name="quantity" type="text" defaultValue={quantity} onChange={this.changeValue}></input>
          <span className="inputMessage">It must be number</span>
        </div>
        <div>
          <label>Url:</label>
          <input name="url" type="text" defaultValue={url} onChange={this.changeValue}></input>
          <span className="inputMessage">Url must have at least one letter</span>
        </div>
 
        <input type="button" value="SAVE" onClick={this.saveNewValue} />
        <input type="button" value="CANCEL" onClick={this.cancelEdit} />
      </form>
    )
  }
}

export default ProductForm;