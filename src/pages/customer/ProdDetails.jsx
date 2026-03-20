import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProdDetails = () => {
    const prodData = useLocation().state
    return (
        <>
            <Box>
                <Box component="img"
                    src={prodData.thumbnail}>

                </Box>
                <Box>
                    <Typography variant='h4'>{prodData.tile}</Typography>
                    <Typography variant='h4'>{prodData.description}</Typography>
                    <Typography variant='h4'>{prodData.rating}</Typography>
                </Box>
            </Box>
            <Box>
                <List >
                    {
                        prodData.reviews.map((rev)=> {
                            return(
                                <ListItem>
                                    <ListItemText 
                                        secondary={rev.comment}
                                        primary={rev.reviewerName}/>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </>
    )
}

export default ProdDetails