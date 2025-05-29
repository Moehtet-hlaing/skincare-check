import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductHeader from './productHeader'

const ProductLayout = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

export default ProductLayout