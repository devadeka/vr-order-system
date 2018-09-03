import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styleHeading = {
  flexGrow: 1    
}

const styleCart = {
  background: 'white'
}

const styleBadge = {
  color: 'white'
}

class NavBar extends Component {

 render() {

    const {cartItems} = this.props

    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styleHeading}>
            WeAreVR
          </Typography>
            <IconButton aria-label="Cart">
              <Badge badgeContent={cartItems}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default NavBar;
