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

class HomePage extends Component {

 render() {

    const {cartItems} = this.props

    return (
      <div>
        {"HomePage"}
      </div>
    );
  }
}

export default HomePage;
