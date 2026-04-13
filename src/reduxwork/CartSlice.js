import { createSlice } from '@reduxjs/toolkit'

const calculateCartTotals = (state) => {
  state.totalQuantity = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )
  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0,
  )
}

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id,
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: newItem.quantity && newItem.quantity > 0 ? newItem.quantity : 1,
        })
      }

      calculateCartTotals(state)
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      )
      calculateCartTotals(state)
    },
    incrementQty: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload,
      )

      if (itemToUpdate) {
        itemToUpdate.quantity += 1
        calculateCartTotals(state)
      }
    },
    decrementQty: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload,
      )

      if (!itemToUpdate) {
        return
      }

      if (itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload,
        )
      }

      calculateCartTotals(state)
    },
    calculateTotalAmount: (state) => {
      calculateCartTotals(state)
    },
  },
})

export const {
  addItem,
  removeItem,
  incrementQty,
  decrementQty,
  calculateTotalAmount,
} = cartSlice.actions

export const renoveItem = removeItem
export const incrmentQty = incrementQty

export default cartSlice.reducer
