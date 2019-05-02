import React, { useState } from 'react';
import logo from './logo.svg';
import './Styles/App.css';

import Product from './Components/Product.js'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.js'
import Menu from './Components/Menu.js'
import firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  productList = () => {
    const products = this.props.products
    const productkeys = Object.keys(products);
    return productkeys.map((key) => 
      <Product 
        title={products[key].title} 
        description={products[key].description}
        price={products[key].price} 
        sizes={products[key].availableSizes}
        image={products[key].sku} />
      );;
  }

  render() {
    return (
      <div className="app-container">
        <Menu />
        <div className="products-container">
          {this.productList()}
        </div>
        <div className="menu-container">
          MENU
        </div>
      </div>
    );
  }
}

export default App;