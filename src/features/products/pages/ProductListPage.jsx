import React from 'react'
import Container from '../../../components/Container'
import ProductList from '../components/ProductList'
import CategoriesSection from '../components/CategoriesSection'

const ProductListPage = () => {
  return (
    <Container>
      <CategoriesSection />
      <ProductList />
    </Container>
  )
}

export default ProductListPage