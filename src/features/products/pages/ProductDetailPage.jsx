import React from 'react'
import ProductDetail from '../components/ProductDetail'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import Heading from '../../../components/Heading'

const ProductDetailPage = () => {
  return (
    <Container>
      <Heading title={"Product Detail"} />
      <BreadCrumb currentPageTitle="Product Detail" />
      <ProductDetail />
    </Container>
  )
}

export default ProductDetailPage