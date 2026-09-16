import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useContextData } from './context/contextApi.jsx'
import NavbarLogin from './userCommon/NavbarLogin'
import { Toolbar } from '@mui/material'

const User = () => {
    const { user } = useContextData()
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.role == "admin") {
            navigate("/dashboard")
        }
    }, [user])
    return (
        <>
            <NavbarLogin />
            <Outlet />
        </>

    )
}

export default User;