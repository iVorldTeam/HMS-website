import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Allrooms from '../Pages/Allrooms';
import User from '../User';
import Profile from '../Pages/profile';
import ProtectedRoutes from '../protected/protectedRoutes';
import AdminComp from '../Admin';
import AddProduct from '../admin/addProducts';
import AdminHome from '../admin/adminHome';
import { useContextData } from '../context/contextApi';

const RoutesComp = () => {
    const { user } = useContextData()
    return (
        <Routes>
            <Route path="/" element={<User />}>
                <Route index element={<Home />} />
                <Route path="Allrooms" element={<Allrooms />} />
                {/* <Route path="experience" element={<Experience />} /> */}
                <Route path="about" element={<About />} />
                <Route path="user-profile" element={<ProtectedRoutes >
                    <Profile />
                </ProtectedRoutes>} />
            </Route>
            <Route path="/dashboard" element={<AdminComp />}>
                <Route index element={<AdminHome />} />
                <Route path="add-product" element={<AddProduct />} />
            </Route>
        </Routes>

    )
}

export default RoutesComp