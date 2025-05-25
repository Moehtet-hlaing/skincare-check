import React from 'react'
import Container from '../../../components/Container'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <Container>
      <section className=''>
        <Link to={'/products'} className=' px-3 py-1 bg-green-400 text-white '>Product List</Link>
      </section>
    </Container>
  )
}

export default DashboardPage