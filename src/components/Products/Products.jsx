import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from  './styles'

// const products = [
//     {id: 1, name: 'Shoes', description: 'Running shoes', price: "$5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgA97JxImwILVl8nRPDYJJA5hAvBt0UNhyg&usqp=CAU"},
//     {id: 2, name: 'Mac', description: 'Apple mac', price: "$50"}
// ]


const Products = ({products, onAddToCart}) => {

    const classes = useStyles()
    console.log(products);
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => {
                console.log(product)
                return (<Grid item key={product.id} xs={12} sm={16} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>)
            })}
        </Grid>
    </main>
  )
}

export default Products