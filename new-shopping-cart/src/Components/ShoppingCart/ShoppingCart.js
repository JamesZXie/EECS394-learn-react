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
            Cart: {
                nonexistentitem: {
                    title: "none",
                    description: "none",
                    price: "none",
                    size: "none",
                    image: "none",
                }
            }
        };

    }

    componentDidMount() {
        const cartRef = firebase.database().ref().child('Cart');
        cartRef.on('value', snap => {
            // takes a JSON string and renders cart from it.
            this.setState({Cart: snap.val()});
        })
    }

    renderCart = (cart) => {
        const cartkeys = Object.keys(cart);
        return cartkeys.map((key) => 
            <CartItem
                title={cart[key].title} 
                description={cart[key].description}
                price={cart[key].price} 
                size={cart[key].size}
                image={cart[key].image}
                blahkey={key} />
        );;
    }

    render(){
        return(
            <div>{this.renderCart(this.state.Cart)} </div>
        )
    }
}

export default ShoppingCart;