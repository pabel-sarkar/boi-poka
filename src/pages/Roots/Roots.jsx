import React from 'react';
import Navbar from '../../component/Headar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';

const Roots = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;