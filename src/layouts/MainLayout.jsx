import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-290px)] w-10/12 mx-auto pt-16'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;