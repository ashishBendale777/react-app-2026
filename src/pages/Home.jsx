import { Typography, Button } from '@mui/material'
import React from 'react'
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Typography variant='body1'>Home Page</Typography>
      <Typography variant='body2'>Home Page</Typography>
      <Typography variant='h4'>Home Page</Typography>

      <Button variant='contained'color='success'>Submit</Button>
      <Button variant='contained' color='error'>Cancel</Button>
    </div>
  )
}

export default Home