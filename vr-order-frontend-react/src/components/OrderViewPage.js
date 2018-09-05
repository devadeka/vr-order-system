import React, { Component } from 'react';
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

class OrderViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderName: "",
      orderAddress: "",
      orderTotalPrice: 0,
      orderItems: []
    };
  }

  componentDidMount() { 
    const { match: { params } } = this.props;
    const itemURL = `${url.baseURL()}/orders/${params.id}`;
    
    console.log(itemURL);
    fetch(itemURL)
    .then( (response) => response.json())
    .then( (response) => {
      this.setState(()=>{
        return {
          orderName: response.name,
          orderAddress: response.address,
          orderTotalPrice: response.total_price,
          orderItems: response.items,
        }
      })})
    .catch( (error) => {
      console.log("Error")
      console.log(error)
    });
  }
  
  render() {
    const { match: { params } } = this.props;
    const { orderName, orderTotalPrice, orderItems } = this.state;
    
    return (

      <Grid container spacing={16}>
        <Card style={{width:"100%"}}>
          

          <CardContent style={{minHeight:"300px"}}>
            <Typography variant="headline" component="h1">
              Order for: {orderName}
            </Typography>

            <Divider/>
            <Divider/>
            <Divider/>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell numeric>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderItems.map(row => {
                  return (<TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.item.name}
                      </TableCell>
                      <TableCell numeric>{row.quantity}</TableCell>
                    </TableRow>
                  );
                })}

                <TableRow>
                  <TableCell component="th" style={{fontWeight:"bold"}} scope="row">
                    Total Item Price
                  </TableCell>
                  <TableCell numeric style={{fontWeight:"bold"}}>
                    ${orderTotalPrice.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default OrderViewPage;
