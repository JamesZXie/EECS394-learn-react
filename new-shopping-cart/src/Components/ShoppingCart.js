import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';

import '../Styles/ShoppingCart.css'

class ShoppingCart extends Component {
    render(){
        return(
            <div>
                <ShoppingCartIcon></ShoppingCartIcon>
            </div>
        )
    }
}

export default ShoppingCart;