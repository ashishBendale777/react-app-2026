import React from 'react'
import Home from './pages/Home'
import MyAppBar from './componants/MyAppBar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import AdminLayout from './layouts/AdminLayout'

const App = () => {
  return (
    <>
      {/* <MyAppBar /> */}
      <AdminLayout/>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Services />} />
        <Route path='*' element={<NotFound />} />

      </Routes> */}

      
    </>
  )
}

export default App