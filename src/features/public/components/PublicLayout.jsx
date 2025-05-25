import React from 'react'
import Container from '../../../components/Container'
import PublicHeader from './publicHeader'
import PublicFooter from './publicFooter'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <main className=' flex flex-col min-h-screen'>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </main>
  )
}

export default PublicLayout