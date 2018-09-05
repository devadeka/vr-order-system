import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ApiUrlBuilder from './ApiUrlBuilder';
import Divider from '@material-ui/core/Divider';

const url = ApiUrlBuilder();

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() { 

  }

  render() {
    const { cartItems, numOfItems } = this.props;
    const shippingFee = numOfItems < 10 ? 30 : 0;
    const discountMultiplier = numOfItems > 20 ? (1-0.1) : (1-0);
    let totalPrice = 0;
    return (
      <Grid container spacing={16}>
        <Card style={{width:"100%"}}>
          
          <CardContent style={{minHeight:"300px"}}>
            
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
                return (
                  <TableRow key={row.id}>
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
        
        </Card>
      </Grid>
    );
  }
}

export default CheckoutPage;
