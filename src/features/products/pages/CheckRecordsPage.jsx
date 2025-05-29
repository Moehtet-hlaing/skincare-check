import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import Heading from '../../../components/Heading'
import CheckRecords from '../components/CheckRecords'

const CheckRecordsPage = () => {
  return (
    <Container>
        <Heading title={"Check Records"} />
        <BreadCrumb currentPageTitle="Check Records" />
        <CheckRecords />
    </Container>
  )
}

export default CheckRecordsPage