import React from 'react'
import Home from './pages/Home'
import MyAppBar from './componants/MyAppBar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import AdminLayout from './layouts/AdminLayout'
import CustomerLayout from './layouts/CustomerLayout'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import Dashboard from './pages/admin/Dashboard'
import AdminOrders from './pages/admin/AdminOrders'
import AddProduct from './pages/admin/AddProduct'
import Products from './pages/customer/Products'
import CustomerOrders from './pages/customer/CustomerOrders'
import Profile from './pages/customer/Profile'

const App = () => {
  return (
    <>
      {/* <AdminLayout/> */}
      {/* <CustomerLayout/> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Registration />} />

        <Route path='/customer' element={<CustomerLayout />}>
          <Route index element={<Products />} />
          <Route path="orders" element={<CustomerOrders />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>

    </>
  )
}

export default App