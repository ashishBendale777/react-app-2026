import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/' replace state={{ from: location }} />
  }

  return <Outlet />
}

export default ProtectedRoute
