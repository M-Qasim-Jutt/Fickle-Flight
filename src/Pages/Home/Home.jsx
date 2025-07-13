import React from 'react'
import './Home'
import HeroPage from '../../Components/Frontpage/HeroPage'
import Flights from '../../Components/Flights/Flights'
import Destinations from '../../Components/Destinations/Destinations'
import ExtraSpace from '../../Components/ExtraSpace/ExtraSpace'
import ContactPage from '../../Components/ContactPage/ContactPage'
// import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <HeroPage/>
    <Flights/>
    <Destinations/>
    <ExtraSpace/>
    <ContactPage/>
    </>
  )
}

export default Home
