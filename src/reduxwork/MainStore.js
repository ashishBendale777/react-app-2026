import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'

const MainStore = configureStore({
  reducer: {
    user: userReducer
  }
})

export default MainStore
