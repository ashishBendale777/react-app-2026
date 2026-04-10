import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userData = useSelector((state) => state.user.userData)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h5' gutterBottom>
        Profile
      </Typography>

      {userData ? (
        <Box>
          <Typography><strong>Name:</strong> {userData.name || 'N/A'}</Typography>
          <Typography><strong>Email:</strong> {userData.email || 'N/A'}</Typography>
        </Box>
      ) : (
        <Typography>No user data found. Please login first.</Typography>
      )}
    </Box>
  )
}

export default Profile
