import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({children, redirectTo}) {
    let isAuthenticated = useSelector((store) => store.auth.isAuthenticated)
    return isAuthenticated ? children: <Navigate to={redirectTo} />
}