import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/core'
import useStyles from '../../Navbar/styles'

const Product = ({product, onAddToCart}) => {
    const classes = useStyles()
    console.log(product);
   
  return (
 
  <Card className={classes.root}> 
       <CardMedia className={classes.media} image={product.image} title={product.name}/>
         <CardContent>
           <div className={classes.cardContent} > 
             <Typography variant='5'  gutterBottom>
                  {product?.price?.formatted_with_code}
             </Typography>

           </div>
           <Typography variant='h2' color='textSecondary'>{product?.description}</Typography>
         </CardContent>
         <CardActions disableSpacing className="classes.cardActions">
           <IconButton aria-label='Add to card' onClick={() => onAddToCart(product.id,1)}>
                {/* <AddShoppingCart/> */}
           </IconButton>
         </CardActions>
  </Card>
  )
}

export default Product