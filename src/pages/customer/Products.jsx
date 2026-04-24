import RateReviewIcon from '@mui/icons-material/RateReview'
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../../reduxwork/CartSlice'
import { useDispatch, useSelector } from 'react-redux'


const Products = () => {
  const dispatcher = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.userData)

  const [productsData, setproductsData] = useState([])
  const [selectedCaategory, setselectedCaategory] = useState('all')
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [reviewForm, setReviewForm] = useState({
    ratings: 0,
    comment: ''
  })
  const [reviewState, setReviewState] = useState({
    loading: false,
    success: false,
    message: ''
  })

  useEffect(() => {
    let fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/fetchproducts')
        setproductsData(data.data ?? [])
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  const filtertedProductsData = selectedCaategory === 'all'
    ? productsData
    : productsData.filter((product) => product.prodCategory === selectedCaategory)

  const productCategories = ['all', ...new Set(productsData.map((product) => product.prodCategory))]

  const handleOpenReviewDialog = (product) => {
    setSelectedProduct(product)
    setReviewForm({
      ratings: 0,
      comment: ''
    })
    setReviewState({
      loading: false,
      success: false,
      message: ''
    })
    setReviewDialogOpen(true)
  }

  const handleCloseReviewDialog = () => {
    setReviewDialogOpen(false)
    setSelectedProduct(null)
    setReviewForm({
      ratings: 0,
      comment: ''
    })
    setReviewState({
      loading: false,
      success: false,
      message: ''
    })
  }

  const postReview = async () => {
    if (!selectedProduct?._id) {
      setReviewState({
        loading: false,
        success: false,
        message: 'Product details are missing.'
      })
      return
    }

    if (!userData?._id) {
      setReviewState({
        loading: false,
        success: false,
        message: 'Please login before posting a review.'
      })
      return
    }

    if (!reviewForm.ratings) {
      setReviewState({
        loading: false,
        success: false,
        message: 'Please select a rating.'
      })
      return
    }

    if (!reviewForm.comment.trim()) {
      setReviewState({
        loading: false,
        success: false,
        message: 'Please enter your comment.'
      })
      return
    }

    setReviewState({
      loading: true,
      success: false,
      message: ''
    })

    try {
      const reqBody = {
        userId: userData._id,
        prodId: selectedProduct._id,
        ratings: reviewForm.ratings,
        comment: reviewForm.comment.trim()
      }

      const { data } = await axios.post('http://localhost:5000/api/postreview', reqBody)

      setReviewState({
        loading: false,
        success: true,
        message: data.message || 'Review posted successfully.'
      })

      setTimeout(() => {
        handleCloseReviewDialog()
      }, 800)
    } catch (error) {
      setReviewState({
        loading: false,
        success: false,
        message: error.response?.data?.message || 'Unable to post review. Please try again.'
      })
    }
  }


  return (
    <>
      <Stack m={2} justifyContent={"center"} direction="row" spacing={1}>
        {productCategories.map((category) => (
          <Chip
            key={category}
            label={category === 'all' ? 'All' : category}
            color={selectedCaategory === category ? 'success' : 'info'}
            variant='filled'
            onClick={() => setselectedCaategory(category)}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {
          filtertedProductsData.map((prod) => {

            return (
              <Grid key={prod._id} item size={{
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
                    src={`http://localhost:5000/uploads/${prod.prodImage}`}
                    alt={prod.prodName}>

                  </CardMedia>
                  <CardContent>
                    <Typography variant='body1'>{prod.prodName}</Typography>
                    <Typography variant='body2'>Rs. {prod.prodPrice}</Typography>
                    <Typography variant='body2'>{prod.prodCategory}</Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Tooltip title='Post review'>
                        <IconButton onClick={() => handleOpenReviewDialog(prod)} color='primary'>
                          <RateReviewIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => {
                          dispatcher(addItem(prod))
                        }}
                      >Add To Cart</Button>
                      <Button onClick={() => {
                        // setselectedProduct(prod)
                        // setsiDiaOpen(true)
                        navigate("/customer/details", { state: prod })
                      }} variant='contained'>Details</Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
      <Dialog open={reviewDialogOpen} onClose={handleCloseReviewDialog} fullWidth maxWidth='sm'>
        <DialogTitle>
          Post Review
        </DialogTitle>
        <DialogContent>
          <Typography variant='h6' sx={{ mb: 2 }}>
            {selectedProduct?.prodName}
          </Typography>

          {reviewState.message && (
            <Alert severity={reviewState.success ? 'success' : 'error'} sx={{ mb: 2 }}>
              {reviewState.message}
            </Alert>
          )}

          <Stack spacing={2} sx={{ mt: 1 }}>
            <Box>
              <Typography variant='body2' sx={{ mb: 1 }}>
                Rating
              </Typography>
              <Rating
                value={reviewForm.ratings}
                onChange={(_, value) => {
                  setReviewForm((prev) => ({
                    ...prev,
                    ratings: value ?? 0
                  }))
                }}
              />
            </Box>

            <TextField
              label='Comment'
              multiline
              minRows={4}
              fullWidth
              value={reviewForm.comment}
              onChange={(event) => {
                const { value } = event.target
                setReviewForm((prev) => ({
                  ...prev,
                  comment: value
                }))
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReviewDialog}>Close</Button>
          <Button
            onClick={postReview}
            variant='contained'
            disabled={reviewState.loading}
          >
            {reviewState.loading ? <CircularProgress size={22} color='inherit' /> : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Products
