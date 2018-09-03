import React, { Component } from 'react';
import ItemCard from './ItemCard';
import Grid from '@material-ui/core/Grid';
import ApiUrlBuilder from './ApiUrlBuilder';

const url = ApiUrlBuilder();

class ItemPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      saleItem : {id: 0, name:"...", description:"...", price:0}
    }
  }

  componentDidMount(){
    let itemURL = `${url.baseURL()}/items/${this.props.params.id}`;
    console.log(itemURL)
    /*fetch(itemURL)
    .then( (response) => response.json())
    .then( (response) => {
      console.log(response)
      this.setState(()=>{
        return {saleItem : response}
      })}
    )
    .catch( (error) => {
      console.log("Error")
      console.log(error)
      this.setState(()=>{
        return {item : {name:"ERROR LOADING ITEM", description:"...", price:0}}
      })
    })*/
  }
      

  render() { 

    const {saleItem} = this.state

    return (
      
        <Grid container spacing={16} direction={"column"}>
          <Card>
            <CardContent>
            <Typography variant="headline" component="h1">
              {saleItem.name}
            </Typography>
            <Typography component="p">
              {saleItem.description}
            </Typography>
            <Typography size="small" color="primary" align="right">
              ${ Math.round(saleItem.price).toFixed(2)}
            </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </Grid>
      
    );
  }
}

export default HomePage;
