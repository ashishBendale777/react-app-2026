import { Alert, Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const Registration = () => {

  const { pending } = useFormStatus()

  let registerUser = async (prevState, formData) => {

    const firstname = formData.get("firstname");
    const midname = formData.get("midname");
    const lastname = formData.get("lastname");
    const mobileNo = formData.get("mobileNo")
    const email = formData.get("email");
    const password = formData.get("password")
    const gender = formData.get("gender");
    const address = formData.get("address")


    // Validation
    if (!firstname || !midname || !lastname || !mobileNo || !email || !password || !gender || !address) {
      return {
        success: false,
        message: "All Fields are Required",
      };
    }

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: `User ${firstname} registered successfully `,
      user: { firstname, midname, lastname, mobileNo, email, password, gender, address }
    };
  }

  const [state, formAction] = useActionState(registerUser, {
    success: false,
    messsage: ""
  })


  return (
    <>

      <Box key={state.success ? 'reset' : 'form'}
        component="form"
        action={formAction}
        sx={{
          maxWidth: 420,
          mx: "auto",
          mt: 6,
          p: 3,
          borderRadius: 2,
          boxShadow: 3
        }}>

        <Typography variant='h5' align='center' gutterBottom>
          Registration FORM
        </Typography>

        {state.message && (
          <Alert severity={state.success ? "success" : "error"} sx={{ mb: 2 }}>

            {state.message}
          </Alert>
        )}

        <TextField
          name='firstname'
          label="First Name"
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name='midname'
          label="Middle Name"
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name='lastname'
          label="Last Name"
          fullWidth
          required
          margin="normal"
        />

        <TextField type='tel'
          name='mobileNo'
          label="Mobile Number"
          fullWidth
          required
          margin="normal"
        />

        <TextField type='email'
          name='email'
          label='Email Address'
          fullWidth
          required
          margin='normal'
        />

        <TextField type='password'
          name='password'
          label='Password'
          fullWidth
          required
          margin='normal'
        />

        <TextField
          name='address'
          label='Address'
          fullWidth
          required
          margin='normal'
        />

        {/* Radio Button */}
        <FormControl margin='normal'>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row name="gender">
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          fullWidth
          disabled={pending}
          sx={{ mt: 2 }}
        >
          {pending ? <CircularProgress size={24} /> : "Register"}
        </Button>
      </Box>

    </>
  )
}

export default Registration