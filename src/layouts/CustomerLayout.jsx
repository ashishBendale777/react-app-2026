import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const CustomerLayout = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <Typography variant='body1'>Admin Panel</Typography> */}

                        <Button color='inherit'>Home</Button>
                        <Button color='inherit' onClick={()=> navigate("/customer")}>Products</Button>
                        <Button color='inherit' onClick={() => navigate("/customer/profile")}>Profile</Button>
                        <Button color='inherit' onClick={() => navigate("/customer/orders")}>Orders</Button>
                        <Button color='inherit'>Login</Button>
                        <Button color='inherit' onClick={()=> navigate("/register")}>Register</Button>
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
