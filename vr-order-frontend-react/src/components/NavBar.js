import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styleHeading = {
  flexGrow: 1,
  color: "white",
}

class NavBar extends Component {

 render() {

    const {cartItems} = this.props

    return (
      <div>
        <AppBar position="static">
        <Toolbar>
            
            <Typography variant="title" color="inherit" style={styleHeading} align="center">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              WeAreVR
            </Link>
            </Typography>
            
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <Tooltip title="Checkout">
                <IconButton aria-label="Cart">
                  <Badge badgeContent={cartItems} color="secondary">
                    <ShoppingCartIcon style={{color: '#FFF'}}/>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default NavBar;
