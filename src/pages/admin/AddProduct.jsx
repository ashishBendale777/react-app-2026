import { Alert, Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const AddProduct = () => {

  const { pending } = useFormStatus()

  let registerUser = async (prevState, formData) => {

    const prodName = formData.get("prodName");
    const prodPrice = formData.get("prodPrice");
    const prodCategory = formData.get("prodCategory");
    const prodBrand = formData.get("prodBrand")
    const prodDescription = formData.get("prodDescription");
    const prodImage = formData.get("")


    // Validation
    if (!prodName || !prodPrice) {
      return {
        success: false,
        message: "All Fields are Required",
      };
    }

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: `Prodyct Added`,
      product: null
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
          Add Product Form
        </Typography>

        {state.message && (
          <Alert severity={state.success ? "success" : "error"} sx={{ mb: 2 }}>

            {state.message}
          </Alert>
        )}

        <TextField
          name='prodName'
          label="Peoduct Name"
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name='prodPrice'
          label="Product Price"
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name='prodDescription'
          label="Product Decription"
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name='prodBrand'
          label="Product Brand"
          fullWidth
          required
          margin="normal"
        />

      
        {/* Radio Button */}
        <FormControl margin='normal'>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row name="prodCategory">
            <FormControlLabel value="Beauty" control={<Radio />} label="Beauty" />
            <FormControlLabel value="Electronics" control={<Radio />} label="Electronics" />
            <FormControlLabel value="Grossary" control={<Radio />} label="Grossary" />
          </RadioGroup>
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          fullWidth
          disabled={pending}
          sx={{ mt: 2 }}
        >
          {pending ? <CircularProgress size={24} /> : "Add Product"}
        </Button>
      </Box>
    </>
  )
}

export default AddProduct