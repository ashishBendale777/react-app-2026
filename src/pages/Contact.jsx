import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Contact = () => {

  //define state variable
  const [counter, setCounter] = useState(0)

  const [show, setshow] = useState(false)

  let increase = () => {
    setCounter(counter + 1)
  }
  let decrease = () => {
    setCounter(counter - 1)

  }

  return (
    <>
      {show && <Typography variant='h4'>Contact US</Typography>}
      <Typography variant='h6'>{counter}</Typography>

      <Button onClick={() => decrease()} variant='outlined'>-</Button>
      <Button onClick={() => increase()} variant='outlined'>+</Button>


      <Button onClick={() => {
        setshow(!show)
      }}>{show? "Hide":"Show"}</Button>
    </>
  )
}

export default Contact