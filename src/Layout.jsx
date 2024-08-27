import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'


function Layout(){
    return(
        <div className='whole-container'>
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
}

export default Layout