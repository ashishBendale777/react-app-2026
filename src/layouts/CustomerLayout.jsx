import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <Typography variant='body1'>Admin Panel</Typography> */}
                    
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>Products</Button>
                        <Button color='inherit'>Profile</Button>
                        <Button color='inherit'>Orders</Button>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Outlet/>
            </Box>
        </>
    )
}

export default CustomerLayout