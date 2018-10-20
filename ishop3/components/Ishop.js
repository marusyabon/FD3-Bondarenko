import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Product from './Product';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

class Ishop extends React.Component {
  
  state= {
      productsList: this.props.products,
      slectedProductId: null,
      slectedProduct: null,
      editedProduct: null,
      newProduct: null
    }

  productSelected = (code) => {
    this.setState({
      editedProduct: null,
      slectedProductId:code,
      slectedProduct:this.defineProduct(code)
    });
  }

  deleteProduct = (code) =>  {
    let productsFiltered = this.state.productsList.filter( p => {
      return p.code != code;
    });
    this.setState({productsList: [...productsFiltered]})
  }

  editProduct = (code) => {
    this.setState({
      slectedProduct: null,
      newProduct: null,
      editedProduct: this.defineProduct(code)
    })
  }

  defineProduct = (productId) => {
    return this.state.productsList.find((item) => item.code == productId);
  }

  saveValue = (newProduct) => { 

    if (this.state.editedProduct) {
      let changedProductsList = [...this.state.productsList];
      changedProductsList.forEach((item, i) => {
        item.code == newProduct.code && (changedProductsList[i] = newProduct)
      });

      this.setState({
        productsList: changedProductsList,
        editedProduct: null
      });
    }
    if (this.state.newProduct) {
      let changedProductsList = [...this.state.productsList, newProduct];
      this.setState({
        productsList: changedProductsList,
        editedProduct: null
      });
    }
    
  }

  cancelEdit = () => {
    this.setState({
      editedProduct: null
    })
  }

  addNewProduct = () => {
    let newProduct = {
      code: this.state.productsList.length +1,
      name:"",
      price:0,
      quantity:0,
      url:""
    };
    this.setState({
      newProduct: newProduct,
      editedProduct: null,
      slectedProduct: null
    })
  }

  render() {

    let productsCode = this.state.productsList.map( item => 
      <Product key={item.code}
        code={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        quantity={item.quantity}
        cbSelected={this.productSelected}
        cbDeleted={this.deleteProduct}
        cbEdited={this.editProduct}
        slectedProductId={this.state.slectedProductId}
        />
      );
      
    return (
      <div>
        <table className="Product">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Url</th>
              <th>Quantity</th>
              <th colSpan="2">Control</th>
            </tr>
            {productsCode}
          </tbody>
        </table>

        <p>
          <button onClick={this.addNewProduct}>New product</button>
        </p>

        { 
          this.state.slectedProduct &&
          <ProductCard product={this.state.slectedProduct} /> 
        }

        { 
          this.state.editedProduct && 
          <ProductForm 
            product={this.state.editedProduct}
            cbSetValue={this.saveValue}
            cbCancelEdit={this.cancelEdit}
             />
        }

        { 
          this.state.newProduct && 
          <ProductForm 
            product={this.state.newProduct}
            cbSetValue={this.saveValue}
            cbCancelEdit={this.cancelEdit}
             />
        }

      </div>
    )
  }
}

export default  Ishop;