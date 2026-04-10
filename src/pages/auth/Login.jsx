import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../reduxwork/UserSlice'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      variant='contained'
      fullWidth
      disabled={pending}
      sx={{ mt: 2 }}
    >
      {pending ? <CircularProgress size={24} /> : 'Login'}
    </Button>
  )
}

const Login = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()

  const loginUser = async (prevState, formData) => {
    const email = formData.get('email')?.trim()
    const password = formData.get('password')

    if (!email || !password) {
      return {
        success: false,
        message: 'Email and password are required.'
      }
    }

    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      })

      dispatch(login(data.data ?? null))
      navigator("/customer")

      return {
        success: data.success,
        message: data.message,
        user: data.data ?? null
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Unable to login. Please try again.'
      }
    }
  }

  const [state, formAction] = useActionState(loginUser, {
    success: false,
    message: '',
    user: null
  })

  return (
    <Box
      key={state.success ? 'success' : 'form'}
      component='form'
      action={formAction}
      sx={{
        maxWidth: 420,
        mx: 'auto',
        mt: 6,
        p: 3,
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      <Typography variant='h5' align='center' gutterBottom>
        Login FORM
      </Typography>

      {state.message && (
        <Alert severity={state.success ? 'success' : 'error'} sx={{ mb: 2 }}>
          {state.message}
        </Alert>
      )}

      <TextField
        type='email'
        name='email'
        label='Email Address'
        fullWidth
        required
        margin='normal'
      />

      <TextField
        type='password'
        name='password'
        label='Password'
        fullWidth
        required
        margin='normal'
      />

      <SubmitButton />
    </Box>
  )
}

export default Login
