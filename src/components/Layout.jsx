import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className=' flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout