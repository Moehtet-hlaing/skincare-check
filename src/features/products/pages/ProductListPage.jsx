import React from 'react'
import Container from '../../../components/Container'
import ProductList from '../components/ProductList'
import CategoriesSection from '../components/CategoriesSection'
import BreadCrumb from '../../../components/BreadCrumb'
import Heading from '../../../components/Heading'
import Header from '../../../components/Header'
import PublicHeader from '../../public/components/PublicHeader'
import ProductHeader from '../components/productHeader'

const ProductListPage = () => {
  return (
    <Container>
      <ProductHeader />
      <Heading title={"Product List"} />
      <CategoriesSection />
      <BreadCrumb currentPageTitle="Product List" />
      <ProductList />
    </Container>
  )
}

export default ProductListPage