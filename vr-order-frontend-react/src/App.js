import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ItemPage from './components/ItemPage'
import CheckoutPage from './components/CheckoutPage'

const styleMainPage = {
  maxWidth : "600px",
  margin: "0 auto"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [], //{id: 0, quantity: 0}
      numOfItems : 0
    }
  }

  handleAddToCart = (newItem,quantity) => {
    this.setState((previousState) => {
      const {cartItems, numOfItems} = previousState;
      if (quantity === 0 ){
        return {}
      }
      if (cartItems.length === 0){
        return {
                  cartItems: [{item: newItem, quantity: quantity}],
                  numOfItems : quantity
                };  
      }

      if (cartItems.filter(item => item.item.id === newItem.id).length === 0){
        return {
                  cartItems: [...cartItems, {item: newItem, quantity: quantity}],
                  numOfItems : numOfItems + quantity
                };
      }
      else{
        return {
                  cartItems: cartItems.map(item => item.item.id === newItem.id ? {
                              ...item, ...{quantity: item.quantity+quantity}} : item
                            ),
                  numOfItems : numOfItems + quantity
                };
      }
      
    });
  }

  handleEmptyCart = () => {
    this.setState((previousState) => {
      return {cartItems: []};
    });
  }

  render() {

    const {cartItems, numOfItems} =  this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Grid container spacing={24}>

            <Grid item sm={12}>
              <NavBar numOfItems = {numOfItems}/>
            </Grid>

            <Grid item sm={12} style={styleMainPage}>
              <Switch>

                <Route path='/' component={HomePage} exact />
                <Route path='/item/:id' render={(props) => (<ItemPage {...props} addToCart={this.handleAddToCart}/>)} exact />
                <Route path='/checkout/' render={(props) => (<CheckoutPage cartItems={cartItems} numOfItems={numOfItems}/>)} exact />
                <Route component={Error} />

              </Switch>
            </ Grid>
            
          </Grid>

        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
