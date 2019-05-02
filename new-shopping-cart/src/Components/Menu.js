import React from 'react';

import ShoppingCart from './ShoppingCart/ShoppingCart.js'
import '../Styles/Menu.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';


class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isCartOpen: false,
        }
    }
    
    toggleCart = () => {
        const newToggle = !this.state.isCartOpen;
        this.setState({isCartOpen: newToggle})
    }
    
    render() {
        return(             
            <div >
                <AppBar position="static">
                <Toolbar>
                    <Button color="default">
                        Filter
                    </Button>

                    <div className="shoppingcarticon-container">
                        <IconButton aria-label="Delete" onClick={this.toggleCart}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </div>

                    <Drawer anchor="right" open={this.state.isCartOpen} onClose={()=>{this.setState({isCartOpen: false})}}>
                        <ShoppingCart 
                            cart={this.props.cart}
                        />
                    </Drawer>
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Menu;