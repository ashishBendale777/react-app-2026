import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {

    const navigate = useNavigate()
    const [isOpen, setisOpen] = useState(false)


    let handleOpen = () => {
        setisOpen(true)
    }
    let handleClose = () => {
        setisOpen(false)
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => handleOpen()}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='body1'>Admin Panel</Typography>                       </Toolbar>
                </AppBar>
            </Box>
            <Box>
                {/* <Toolbar /> */}
                <Outlet />
            </Box>
            <Drawer anchor='left' open={isOpen} onClose={handleClose}>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=> navigate("/admin")}>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Dashboard" secondary="Analyze" />
                            </ListItemButton>
                        </ListItem>

                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=> navigate("/admin/addproduct")}>
                                {/* <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Add Product" secondary="Product Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Orders" secondary="Manage Orders" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>
            </Drawer>
        </>
    )
}

export default AdminLayout