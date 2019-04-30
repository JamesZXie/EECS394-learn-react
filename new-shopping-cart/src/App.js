import React from 'react';
import logo from './logo.svg';
import './App.css';

import Product from './Components/Product.js'

class App extends React.Component {

  // ProductList = ()=> {
  //   console.log(this.props)
  //   const products = this.props.products
  //   const listItems = Object.keys(products).map( (key) =>
  //     <Product
  //       title={products[key].title}
  //     />
  //   );
  //   return (
  //     listItems
  //   );
  // }

  productList = () => {
    const products = this.props.products
    const productkeys = Object.keys(products);
    const items = productkeys.map( (key) => 
      <Product 
        title={products[key].title} 
        description={products[key].description}
        price={products[key].price} 
        sizes={products[key].availableSizes}
        image={products[key].sku}
      />
      );
    return items;
  }

  render() {
    return (
      <div className="App-container">
        {this.productList()}
      </div>
    );
  }
}

export default App;
