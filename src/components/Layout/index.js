import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children}) => {
    //с помощью props передаем содержимое других компонентов
    return (
        <>
            <Header/>
            <main className='main'>{children}</main>
            <Footer/>
        </>
    );
};

export default Layout;