// src/Components/Layout/Layout.jsx

import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const HomeLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default HomeLayout;
