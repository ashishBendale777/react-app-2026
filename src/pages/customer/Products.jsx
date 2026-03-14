import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [productsData, setproductsData] = useState([])

  useEffect(() => {
    //define a function for fetching products data
    let fetchProducts = async () => {
      let result = await axios.get("https://dummyjson.com/products")
      console.log(result.data)
      setproductsData(result.data.products)
    }

    //call a function
    fetchProducts()
  }, [])

  return (
    <>
      <Grid container>
        {
          productsData.map((prod) => {

            return (
              <Grid item size={{
                sm: 12,
                lg: 3,
                md: 6
              }}>
                <Card>
                  <CardMedia 
                  sx={{
                    height:"200px"
                  }}
                    component={"img"}
                    src={prod.thumbnail}>

                  </CardMedia>
                  <CardContent>
                    <Typography variant='body1'>{prod.title}</Typography>
                    <Typography variant='body2'>{prod.price}</Typography>
                    <Typography variant='body2'>{prod.category}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>Add To Cart</Button>
                    <Button>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}

export default Products