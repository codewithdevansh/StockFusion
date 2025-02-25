import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import NavBar from '../NavBar'
import Footer from '../Footer'

function HomePage() {
    return (
        <>
            <NavBar/>
            <Hero />
            <Awards />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer/>
        </>

    );
}

export default HomePage;