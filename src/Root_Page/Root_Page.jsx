import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Root_Page = () => {
  return (
    <div className='font-poppins '>
        <Header/> 
        <Outlet/> 
        <Footer/>
    </div>
  )
}

export default Root_Page