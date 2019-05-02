import React, { Component } from 'react';
import "../Styles/Product.css"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import * as firebase from 'firebase';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
        }
    }

    componentDidUpdate() {
        const inventory = this.props.hasSizes()
        console.log(this.props.hasSizes())
        this.setState = ({
            S: inventory.S,
            M: inventory.M,
            L: inventory.L,
            XL: inventory.XL
        })
    }

    onSelectSize = (props, size) => {
        console.log(this.state)
        const title = props.title;
        const price = props.price;
        const image = "./data/products/" + this.props.image + "_1.jpg"
        const description = props.description
        const newRef = firebase.database().ref().child('Cart').push();
        newRef.set({  
            title: title,
            price: price,
            image: image,
            size: size,
            description: description,
        });
    }

    renderSizes = () => {
        const sizes = this.props.sizes;
        const sizekeys = Object.keys(sizes)
        return sizekeys.map( (key) =>
            <Button 
                size="small" 
                variant="outlined" 
                className="product-sizebutton" 
                onClick={()=> { this.onSelectSize(this.props, sizes[key]) }}>{sizes[key]}</Button>
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
