import React from 'react'
import { navbar } from '../assets'
import Navbartest from './Navbartest'
import Testsection from './Testsection'
import Assesment from './Assesment'
import Footer from './Footer'
import Testcard from './Testcard'
// import { useSelector } from "react-redux";


const Test = () => {
  // const details = useSelector((state) => state.cred.details);
  return (
    <section>
        
        <Navbartest/>
       
        <img src={navbar} className='' />
        <Testsection/>
        <Testcard/>
        <Assesment/>
        <Footer/> 
       
        
    </section>
  )
}

export default Test