import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const AdminLayout = () => {

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
            <Drawer anchor='right' open={isOpen} onClose={handleClose}>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>

                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>
            </Drawer>
        </>
    )
}

export default AdminLayout