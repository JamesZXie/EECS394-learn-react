import React, { Component } from 'react';
import "../Styles/Product.css"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Product extends Component{

    onSelectSize = (size) => {

    }

    renderSizes = () => {
        const sizes = this.props.sizes;
        const sizekeys = Object.keys(sizes)
        return sizekeys.map( (key) =>
            <Button variant="outlined" className="product-sizebutton">{sizes[key]}</Button>
        ) 
    }

    render(){
        return(
            <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image" src={"./data/products/" + this.props.image + "_1.jpg"} />
                </div>
                <div className="product-title">{this.props.title}</div>
                <div className="product-price">${this.props.price}</div>
                <div className="product-sizes">{this.renderSizes()}</div>
            </div>
        )
    }
}


export default Product
