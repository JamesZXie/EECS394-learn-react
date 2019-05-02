import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as firebase from 'firebase';

import '../../Styles/CartItem.css'


class CartItem extends Component {
    constructor(props){
        super(props)
    }

    deleteItem = () => {
        firebase.database().ref().child('Cart').child(this.props.blahkey).remove();
    }

    render(){
        return(
            <div>
                <IconButton aria-label="Delete" onClick={()=> {this.deleteItem()}}>
                    <DeleteIcon />
                </IconButton>
                <img src = {this.props.image} style={{height: "80px"}}></img>
                {this.props.title}
                {this.props.price}
                {this.props.description}
                
                {this.props.size}
            </div>
        )
    }
}

export default CartItem;