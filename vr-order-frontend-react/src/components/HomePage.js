import React, { Component } from 'react';
import ItemCard from './ItemCard';
import Grid from '@material-ui/core/Grid';

class HomePage extends Component {

 render() {

    // const {saleItems} = this.props
    const saleItems = [
      {name:"WAVR-XS Glasses", description:"This is the extra small version of the glasses", price:5},
      {name:"WAVR-SM Glasses", description:"This is the small version of the glasses This is the small version of the glasses This is the small version of the glasses", price:15},
      {name:"WAVR-MD Glasses", description:"This is the medium  version of the glasses", price:25},
      {name:"WAVR-LG Glasses", description:"This is the large version of the glasses", price:35},
      {name:"WAVR-XL Glasses", description:"This is the extra large version of the glasses", price:45},
    ]
    
    return (
      
        <Grid container spacing={16} direction={"column"}>
        {saleItems.map( (item, key) => <ItemCard key={key} saleItem={item}/> )}
        </Grid>
      
    );
  }
}

export default HomePage;
