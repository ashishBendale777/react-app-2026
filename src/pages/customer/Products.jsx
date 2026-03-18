import {
  Button, Card, CardActions,
  CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, Typography
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [siDiaOpen, setsiDiaOpen] = useState(false)

  const [selectedProduct, setselectedProduct] = useState(null)

  const [productsData, setproductsData] = useState([])
  const [filltedproductsData, setfilltedproductsData] = useState([])

  const [selectedCaategory, setselectedCaategory] = useState("all")


  useEffect(() => {
    let fetchProducts = async () => {
      let result = await axios.get("https://dummyjson.com/products")
      setproductsData(result.data.products)

      let fillterResult = productsData.filter((p) => p.category == selectedCaategory)
      setfilltedproductsData(fillterResult)

      if (selectedCaategory == 'all') {
        setfilltedproductsData(result.data.products)
      }
    }

    fetchProducts()
  }, [selectedCaategory, productsData])


  return (
    <>
      <Stack m={2} justifyContent={"center"} direction="row" spacing={1}>
        <Chip label="All" color={selectedCaategory == 'all' ? "success" : "info"} variant='filled' onClick={() => setselectedCaategory("all")} />
        <Chip label="Beauty" color={selectedCaategory == 'beauty' ? "success" : "info"} variant="filled" onClick={() => setselectedCaategory("beauty")} />
        <Chip label="Fragrances" color={selectedCaategory == 'fragrances' ? "success" : "info"} variant="filled" onClick={() => setselectedCaategory("fragrances")} />
        <Chip label="Furniture" color={selectedCaategory == 'furniture' ? "success" : "info"} variant="filled" onClick={() => setselectedCaategory("furniture")} />
        <Chip label="Grossry" color={selectedCaategory == 'groceries' ? "success" : "info"} variant="filled" onClick={() => setselectedCaategory("groceries")} />
      </Stack>
      <Grid container>
        {
          filltedproductsData.map((prod) => {

            return (
              <Grid item size={{
                sm: 12,
                lg: 3,
                md: 6
              }}>
                <Card>
                  <CardMedia
                    sx={{
                      height: "200px"
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
                    <Button onClick={() => {
                      setselectedProduct(prod)
                      setsiDiaOpen(true)
                    }} variant='contained'>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>

      <Dialog open={siDiaOpen} onClose={() => setsiDiaOpen(false)}>
        <DialogTitle>
          Products Details
        </DialogTitle>
        <DialogContent>
          <Typography variant='body1'>{selectedProduct?.title}</Typography>
          <Typography variant='body1'>{selectedProduct?.description}</Typography>
          <Typography variant='body1'>{selectedProduct?.rating}</Typography>
          <Typography variant='body1'>{selectedProduct?.stock}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setsiDiaOpen(false)
            setselectedProduct(null)
          }}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Products