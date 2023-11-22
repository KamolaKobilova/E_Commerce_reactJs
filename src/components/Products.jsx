import React from 'react';
import { Grid } from '@material-ui/core';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: "$5"},
    {id: 2, name: 'Mac', description: 'Apple mac', price: "$50"}
]


const Products = () => {
  return (
    <main>
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => {
                <Grid item key={product.id} xs={12} sm={16} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            })}
        </Grid>
    </main>
  )
}

export default Products