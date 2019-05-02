import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';

import CartItem from './CartItem.js'
import * as firebase from 'firebase';

import '../../Styles/ShoppingCart.css'


class ShoppingCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            speed: [10, 11]
        };

    }

    componentDidMount() {
        const cartRef = firebase.database().ref().child('Cart');
        cartRef.on('value', snap => {
            console.log(snap.val())
            for (var cartItem in snap.val()) {
                console.log(cartItem)
            }
        })
    }

    renderCart = () => {
        const products = this.props.cart
        const productkeys = Object.keys(products);
        return productkeys.map((key) => 
        <CartItem
            title={products[key].title} 
            description={products[key].description}
            price={products[key].price} 
            sizes={products[key].availableSizes}
            image={products[key].sku} />
        );;
    }

    render(){
        return(
            <div>
                {this.state.speed}
                <button onClick={()=> {this.test()}}>CLICK</button>
            </div>
        )
    }
}

export default ShoppingCart;