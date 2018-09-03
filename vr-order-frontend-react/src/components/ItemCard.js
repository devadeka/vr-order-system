import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function ItemCard(props) {

  const {saleItem} = props

  

  return (
    <div>
      <Grid item xs={12} spacing={24} style={{margin:"2px"}}>
      <Card>
        <CardActionArea style={{width:"100%"}}>
          <CardContent>
          <Typography> 
            {saleItem}
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>      
    </div>
  )
}

export default ItemCard;
