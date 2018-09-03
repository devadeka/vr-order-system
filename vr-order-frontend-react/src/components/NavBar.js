import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styleHeading = {
  flexGrow: 1
}

class NavBar extends Component {

 render() {

    const {cartItems} = this.props

    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styleHeading} align="center">
            WeAreVR
          </Typography>
            <IconButton aria-label="Cart">
              <Badge badgeContent={cartItems} color="secondary">
                <ShoppingCartIcon style={{color: '#FFF'}}/>
              </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default NavBar;
