import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ApiUrlBuilder from './ApiUrlBuilder';

const url = ApiUrlBuilder();

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      saleItem: {
        id: 0,
        name: '...',
        description: '...',
        price: 0,
      },
    };
  }

  componentDidMount() { 
    const { match: { params } } = this.props;
    const itemURL = `${url.baseURL()}/items/${params.id}`;
    
    console.log(itemURL);
    fetch(itemURL)
    .then( (response) => response.json())
    .then( (response) => {
      // console.log(response)
      this.setState(()=>{
        return {saleItem : response}
      })})
    .catch( (error) => {
      // console.log("Error")
      // console.log(error)
      this.setState(()=>{
        return {saleItem : {id: 0, name:"ERROR LOADING ITEM", description:"...", price: 10}}
      })
    });
  }

  handleAddToCart = () =>{
    let {addToCart} = this.props;
    const {saleItem, quantity} = this.state;
    addToCart(saleItem,quantity);
    this.setState((previousState) => {
      return {quantity: 0};
    });
  }

  handleAddQty = () => {
    this.setState((previousState) => {
      const {quantity} = previousState 
      return {quantity: Math.max(0,quantity + 1)};
    });
  }

  handleRemoveQty = () => {
    this.setState((previousState) => {
      const {quantity} = previousState 
      return {quantity: Math.max(0,quantity - 1)};
    });
  }

  render() {
    const { saleItem, quantity } = this.state;

    return (
      <Grid container spacing={16}>
        <Card style={{width:"100%"}}>
          
          <CardContent style={{minHeight:"300px"}}>
            
            <Typography variant="headline" component="h1">
              {saleItem.name}
            </Typography>
            
            <Typography color="primary" component="h2" align="right" style={{width:"100%"}}>
              ${Math.round(saleItem.price).toFixed(2)}
            </Typography>
            
            <Typography component="p">
              {saleItem.description}
            </Typography>
          
          </CardContent>

          <CardActions>
            <Button mini variant="fab" color="primary" aria-label="Remove">
              <RemoveIcon onClick={this.handleRemoveQty}/>
            </Button>
            <Button mini variant="fab" color="primary" aria-label="Add">
              <AddIcon  onClick={this.handleAddQty} />
            </Button>
            <Button variant="contained" size="large" color="primary" onClick={this.handleAddToCart}>
              Add {quantity} to Cart
            </Button>
          </CardActions>
        
        </Card>
      </Grid>
    );
  }
}

export default ItemPage;
