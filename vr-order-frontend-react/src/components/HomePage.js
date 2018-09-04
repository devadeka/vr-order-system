import React, { Component } from 'react';
import ItemCard from './ItemCard';
import Grid from '@material-ui/core/Grid';
import ApiUrlBuilder from './ApiUrlBuilder';

const url = ApiUrlBuilder();

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      saleItems : [
        {id: 0, name:"...", description:"...", price:0},
        {id: 0, name:"...", description:"...", price:0},
        {id: 0, name:"...", description:"...", price:0},
      ]
    }
  }

  componentDidMount(){
    console.log(url.baseURL()+"/items")
    fetch(url.baseURL()+"/items")
    .then( (response) => response.json())
    .then( (response) => {
      console.log(response)
      this.setState(()=>{
        return {saleItems : response}
      })}
    )
    .catch( (error) => {
      console.log("Error")
      console.log(error)
      this.setState(()=>{
        return {saleItems : [
          {id: 0, name:"ERROR", description:"...", price:0},
          {id: 0, name:"LOADING", description:"...", price:0},
          {id: 0, name:"ITEMS", description:"...", price:10},
          {id: 0, name:"...", description:"...", price:0},
        ]}
      })
    })
  }
      

  render() { 

    const {saleItems} = this.state

    return (
      
        <Grid container spacing={16} direction={"column"}>
        {saleItems.map( (item, key) => <ItemCard key={key} saleItem={item}/> )}
        </Grid>
      
    );
  }
}

export default HomePage;
