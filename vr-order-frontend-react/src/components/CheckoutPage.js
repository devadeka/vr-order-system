import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import ApiUrlBuilder from './ApiUrlBuilder';

const url = ApiUrlBuilder();

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderName: "",
      orderAddress: "",
      orderId: null,
    };
  }

  handleNameChange = (event) => {
    const name = event.target.value
    this.setState({orderName: name});
  }

  handleAddressChange = (event) => {
    const address = event.target.value
    this.setState({orderAddress: address});
  }

  handlePlaceOrder = () => {
    const { cartItems, numOfItems } = this.props;
    const { orderName, orderAddress } = this.state;
    const orderPost = {
      name: orderName,
      address: orderAddress,
      items: [...cartItems],
    }
    const itemURL = `${url.baseURL()}/orders`;
    fetch(itemURL, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(orderPost) })
    .then( (response) => response.json())
    .then( (response) => {
      console.log(response)
      if(response != undefined){
        this.setState({orderId: response.id});
      }
    })
    .catch( (error) => {
      console.log("Error")
      console.log(error)
    });
  }

  render() {
    const { cartItems, numOfItems } = this.props;
    const { orderName, orderAddress, orderId } = this.state;
    const shippingFee = numOfItems < 10 ? 30 : 0;
    const discountMultiplier = numOfItems > 20 ? (1-0.1) : (1-0);
    let totalPrice = 0;
    console.log(orderId);

    if (orderId != null) {
      return <Redirect to={`/order/${orderId}`} />
    }

    return (
      
      <Grid container spacing={16}>
        <Card style={{width:"100%"}}>
          
          <CardContent style={{minHeight:"300px"}}>
            <Typography variant="headline" component="h1">
              Enter Shipping Details
            </Typography>
            <TextField fullWidth label="Order Name" onChange={this.handleNameChange}/>
            <Divider />
            <TextField fullWidth label="Order Address" onChange={this.handleAddressChange}/>
            
            <TableRow/>
            <Typography variant="headline" component="h1">
              Review Order
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell numeric>Quantity</TableCell>
                  <TableCell numeric>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map(row => {
                  totalPrice += (row.quantity * row.item.price)
                  return (<TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.item.name}
                      </TableCell>
                      <TableCell numeric>{row.quantity}</TableCell>
                      <TableCell numeric>${row.item.price.toFixed(2)}</TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                      <TableCell component="th" style={{fontWeight:"bold"}} scope="row">
                        Total Item Price
                      </TableCell>
                      <TableCell numeric></TableCell>
                      <TableCell numeric style={{fontWeight:"bold"}}>${totalPrice.toFixed(2)}</TableCell>
                    </TableRow>
              </TableBody>
            </Table>
            
            <Divider />
            <Divider />
            <Divider />

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Shipping Fee
                  </TableCell>
                  <TableCell numeric>${shippingFee.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Discount
                  </TableCell>
                  <TableCell numeric>${100-(discountMultiplier*100)}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" style={{fontWeight:"bold"}}>
                    Total Order Price
                  </TableCell>
                  <TableCell numeric style={{fontWeight:"bold"}}>
                    ${  ((totalPrice*discountMultiplier)+shippingFee).toFixed(2)   }
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Divider />
            <Divider />
            <Divider />
          </CardContent>
          <CardActions>
          <Button 
            fullWidth 
            disabled = {!orderName || !orderAddress}
            variant="contained" 
            size="large" 
            color="primary" 
            onClick={this.handlePlaceOrder}>
              Place Order
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default CheckoutPage;
