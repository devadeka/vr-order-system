import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

let summariseDescription = (description) => {
  if(description.length>80){
    return description.substring(0,80)+"..."
  }
  else{
    return description
  }
}

function ItemCard(props) {

  const {saleItem} = props

  

  return (
    <div>
      <Grid item xs={12} style={{margin:"5px"}}>
        <Card>
          <Link to={`/item/${saleItem.id}`} style={{ textDecoration: 'none' }}>
            <CardActionArea style={{width:"100%"}}>
              <CardContent>
              <Typography variant="headline" component="h1">
                {saleItem.name}
              </Typography>
              <Typography component="p">
                {summariseDescription(saleItem.description)}
              </Typography>
              <Typography size="small" color="primary" align="right">
                ${Math.round(saleItem.price).toFixed(2)}
              </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>      
    </div>
  )
}

export default ItemCard;
