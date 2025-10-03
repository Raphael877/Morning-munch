import React from 'react'
import Header from '../Components/Header'
import How from '../Components/How'
import Footer from '../Components/Footer'
import styled from 'styled-components'

const HowItWorks = () => {
  return (
    <AboutPage_content>
        <AboutPage_wrapper>
            <Header />
            <div className='space'></div>
            <How />
            <Footer />
        </AboutPage_wrapper>
    </AboutPage_content>
  )
}

export default HowItWorks

const AboutPage_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutPage_wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .space{
        width: 100%;
        height: 20vh;
    }
`