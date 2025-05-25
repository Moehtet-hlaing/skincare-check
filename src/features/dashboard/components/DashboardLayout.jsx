import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import CategoriesSection from '../../products/components/CategoriesSection'

const DashboardLayout = () => {
  return (
    <main className=' flex flex-col min-h-screen'>
      <Header />
      <CategoriesSection />
      <Outlet />
      <Footer />
    </main>
  )
}

export default DashboardLayout