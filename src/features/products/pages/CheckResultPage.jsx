import React from 'react'
import Container from '../../../components/Container'
import CheckResult from '../components/CheckResult'
import BreadCrumb from '../../../components/BreadCrumb'
import Heading from '../../../components/Heading'

const CheckResultPage = () => {
  return (
    <Container>
      <Heading title={"Check Result"} />
    <BreadCrumb currentPageTitle="Check Result" links={[{path: '/products/check-ingredients', title: 'Check Products'}]} />
    <CheckResult />
    </Container>
  )
}

export default CheckResultPage