import React from 'react'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <main className=' flex flex-col min-h-screen overflow-y-auto'>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </main>
  )
}

export default PublicLayout