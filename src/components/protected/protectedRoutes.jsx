import React from 'react'
import { Navigate } from 'react-router'
import { useContextData } from '../context/contextApi'

const ProtectedRoutes = ({ children }) => {
    const { user } = useContextData()
    // let isUSerLogin = localStorage.getItem("token")
    if (!user) {
        return <Navigate to="/" />
    }
    return children

}

export default ProtectedRoutes