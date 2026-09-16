import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import { useContextData } from './context/contextApi'

const AdminComp = () => {
    const { user } = useContextData()
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.role !== "admin") {
            navigate("/")
        }
    }, [user])
    return (
        <>
            <NavLink to="">DASHBOARD</NavLink>
            <NavLink to="add-product">ADD PRODUCT</NavLink>
            <Outlet />
        </>
    )
}

export default AdminComp
