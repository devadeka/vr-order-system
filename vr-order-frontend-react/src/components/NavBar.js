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

    const {numOfItems} = this.props

    return (
      <div>
        <AppBar position="static">
        <Toolbar>
            
            <Typography variant="title" color="inherit" style={styleHeading} align="center">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              WeAreVR
            </Link>
            </Typography>
            
            {numOfItems>0?<Link to={`/checkout`} style={{ textDecoration: 'none' }}>
                  <Tooltip title="Checkout">
                    <IconButton aria-label="Cart">
                      <Badge badgeContent={numOfItems} color="secondary">
                        <ShoppingCartIcon style={{color: '#FFF'}}/>
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Link>
              :<Tooltip title="No Items to Checkout">
                  <IconButton aria-label="Cart">
                    <ShoppingCartIcon style={{color: '#FFF'}}/>
                  </IconButton>
                </Tooltip>
              }
            
            
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default NavBar;
