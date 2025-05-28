import React from 'react'
import Container from '../../../components/Container'
import HeroSection from '../components/heroSection'
import AboutPage from './AboutPage'
import StatPage from './StatPage'
import ContactPage from './ContactPage'

const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <AboutPage />
      <StatPage />
      <ContactPage />
    </Container>
  )
}

export default HomePage