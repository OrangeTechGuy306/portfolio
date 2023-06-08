import React from 'react'
import Nav from '../../components/nav/Nav'
import Front from '../../components/front/Front'
import About from '../../components/about/About'
import Services from '../../components/service/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import Intouch from '../../components/intouch/Intouch'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
        <section>
            <Nav/>
            <Front/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Intouch/>
            <Footer/>
        </section>
  )
}

export default Home