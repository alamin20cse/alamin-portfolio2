import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer';

const HomeMain = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeMain;