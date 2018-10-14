import React from 'react';

import './Ishop.css';

import Product from './Product';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

class Ishop extends React.Component {
  
  state= {
      productsList: this.props.products,
      slectedProductId: null,
      slectedProduct: null,
      editedProduct: null
    }

  productSelected = (code) => {
    this.setState({
      slectedProductId:code,
      slectedProduct:this.defineProduct(code)
    }, ()=> {console.log("select")});
  }

  deleteProduct = (code) =>  {
    let productsFiltered = this.state.productsList.filter( p => {
      return p.code != code;
    });
    this.setState({productsList: [...productsFiltered]})
  }

  editProduct = (code) => {
    this.setState({
      editedProduct: this.defineProduct(code)
    }, ()=> {console.log("edit")})
  }

  defineProduct = (productId) => {
    return this.state.productsList.find((item) => item.code == productId);
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
          <button>New product</button>
        </p>

        { 
          this.state.slectedProduct &&
          <ProductCard product={this.state.slectedProduct} /> 
        }

        { 
          this.state.editedProduct && 
          <ProductForm product={this.state.editedProduct} />
        }

      </div>
    )
  }
}

export default  Ishop;