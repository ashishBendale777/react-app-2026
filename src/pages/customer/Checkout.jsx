import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'


const Checkout = () => {
    const userData = useSelector((state) => state.user.userData)
    const { cartItems, totalAmount } = useSelector((state) => state.cart)

    let createOrderReq = async () => {

        let finalOrderItems = cartItems.map((item) => {
            prodId = item?._id
            Qty = item?.quantity
        })

        console.log(finalOrderItems)

        let reqBody = {
            userId: userData?._id,
            orderAmount: totalAmount,
            orderItems: finalOrderItems
        }

        try {
            let result = await axios.post("", reqBody)
            alert("Order Created")
        } catch (error) {
            console.log(error)
            alert("Error")
        }
    }


    return (
        <div>

            <Button onClick={() = createOrderReq()} variant='contained' color='primary'>
                Place Order
            </Button>
        </div>
    )
}

export default Checkout