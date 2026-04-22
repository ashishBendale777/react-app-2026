import { Box, List, Typography, Divider, Paper, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'


const AdminOrderDetails = () => {
    const location = useLocation()
    const order = location.state || {}

    if (!order.orderItems) {
        return <Typography sx={{ p: 3 }}>No order details found.</Typography>
    }

    return (
        <>
            <Box p={2}>
                <Typography variant="h4" p={3} gutterBottom fontWeight={"bold"} boxShadow={2} align='center'>Order Details</Typography>
            </Box>

            <Box sx={{ p: 3, maxWidth: 1200, margin: "auto" }}>
                <Card sx={{ mb: 4, boxShadow: 2, display: "flex", justifyContent: "space-evenly" }}>
                    <CardContent>
                        <Typography variant="h6" color="primary">Customer Information</Typography>
                        <Typography><strong>Name:</strong> {order.userId?.firstName} {order.userId?.lastName}</Typography>
                        <Typography><strong>Email:</strong> {order.userId?.email}</Typography>
                        <Typography><strong>Address:</strong> {order.userId?.address.street} {order.userId?.address.city} {order.userId?.address.state}, {order.userId?.address.postalcode}</Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                        <Typography variant="h6" color="primary">Order Summary</Typography>
                        <Typography><strong>Status:</strong> {order.orderStatus}</Typography>
                        <Typography><strong>Total Amount:</strong> ₹{order.orderAmount}</Typography>
                        <Typography><strong>Payment Method:</strong> {order.paymentType}</Typography>
                    </CardContent>
                </Card>

                <Typography variant="h6" sx={{ mb: 2 }} align='center' color='info'>Products in this Order</Typography>
                <Grid container>
                    {order.orderItems.map((item) => (
                        <Grid key={item._id} size={{ lg: 6, md: 6, sm: 12 }} sx={{ p: 2, mb: 2, display: 'flex', gap: 3, alignItems: 'center' }}>
                            <Box
                                component="img"
                                sx={{
                                    width: 120,
                                    height: 120,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                }}
                                src={`http://localhost:5000/uploads/${item.productId?.productImage}`}
                                alt={item.productId?.productName || "Product"} />

                            <Box>
                                <Typography variant="h6">{item.productId?.productName}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.productId?.productDescription}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    <strong>Qty:</strong> {item.Qty}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Price per unit:</strong> ₹{item.productId?.productPrice}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )

}

export default AdminOrderDetails