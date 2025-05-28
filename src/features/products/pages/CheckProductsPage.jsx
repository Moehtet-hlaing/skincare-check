import React from 'react'
import Container from '../../../components/Container'
import CheckProducts from '../components/CheckProducts';
import BreadCrumb from '../../../components/BreadCrumb';
import Heading from '../../../components/Heading';

const CheckProductsPage = () => {
  return (
    <Container>
      <Heading title={"Check Products"} />
    <BreadCrumb currentPageTitle="Check Products" />
    <CheckProducts />
    </Container>
  )
}

export default CheckProductsPage