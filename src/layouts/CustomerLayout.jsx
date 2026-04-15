import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const CustomerLayout = () => {
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <Typography variant='body1'>Admin Panel</Typography> */}

                        <Button color='inherit'>Home</Button>
                        <Button color='inherit' onClick={()=> navigate("/customer")}>Products</Button>
                        <Button color='inherit' onClick={() => navigate("/customer/cart")}>Cart</Button>
                        <Button color='inherit' onClick={() => navigate("/customer/profile")}>Profile</Button>
                        <Button color='inherit' onClick={() => navigate("/customer/orders")}>Orders</Button>
                        {!isAuthenticated && <Button color='inherit' onClick={() => navigate("/")}>Login</Button>}
                        {!isAuthenticated && <Button color='inherit' onClick={()=> navigate("/register")}>Register</Button>}
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </>
    )
}

export default CustomerLayout
