import React, { Component } from 'react';
import ItemCard from './ItemCard';
import Grid from '@material-ui/core/Grid';

class HomePage extends Component {

 render() {

    // const {saleItems} = this.props
    const saleItems = [1,2,3,4,5,6]
    return (
      
        <Grid container spacing={16} direction={"column"}>
        {saleItems.map( (item, key) => <ItemCard key={key} saleItem={item}/> )}
        </Grid>
      
    );
  }
}

export default HomePage;
