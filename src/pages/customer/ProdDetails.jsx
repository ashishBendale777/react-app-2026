import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProdDetails = () => {
    const prodData = useLocation().state
    const reviews = prodData?.reviews ?? []

    return (
        <>
            <Box>
                <Box component="img"
                    sx={{ width: 300, maxWidth: '100%', borderRadius: 2 }}
                    src={`http://localhost:5000/uploads/${prodData?.prodImage}`}
                    alt={prodData?.prodName}>

                </Box>
                <Box>
                    <Typography variant='h4'>{prodData?.prodName}</Typography>
                    <Typography variant='h6'>{prodData?.prodDescription}</Typography>
                    <Typography variant='body1'>Category: {prodData?.prodCategory}</Typography>
                    <Typography variant='body1'>Price: Rs. {prodData?.prodPrice}</Typography>
                </Box>
            </Box>
            <Box>
                <List >
                    {
                        reviews.map((rev)=> {
                            return(
                                <ListItem key={rev._id || rev.reviewDate || rev.comment}>
                                    <ListItemText 
                                        secondary={rev.comment}
                                        primary={rev.reviewerName}/>
                                </ListItem>
                            )
                        })
                    }
                    {!reviews.length && (
                        <ListItem>
                            <ListItemText primary="No reviews yet." />
                        </ListItem>
                    )}
                </List>
            </Box>
        </>
    )
}

export default ProdDetails
