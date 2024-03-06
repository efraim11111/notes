import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
        <div >
        <NavBar />
        <Outlet  />
        </div>
        <Footer/>

    </div>
  )
}

export default Layout