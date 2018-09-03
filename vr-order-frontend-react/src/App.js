import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

const styleMainPage = {
  maxWidth : "600px",
  margin: "0 auto"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Grid container spacing={24}>

            <Grid item sm={12}>
              <NavBar cartItems = {""}/>
            </Grid>

            <Grid item sm={12} style={styleMainPage}>
              <Switch>

                <Route path='/' component={HomePage} exact />
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
