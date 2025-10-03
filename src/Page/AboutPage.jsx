import React from 'react'
import styled from 'styled-components'
import Aboutpics from '../assets/Aboutpics.png'
import why3 from '../assets/why3.jpg'
import Grow from '../Components/Grow'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const AboutPage = () => {
  return (
    <AboutPage_content>
      <AboutPage_wrapper>
        <Header />
        <div className='space'>.</div>
        <div className='shape'>
          <div className='shape_wrapper'>
          <h1>Shaping the Future of Breakfast <br />Delivery Everywhere</h1>
          <p>Morning Bite was born from a simple truth; morning are hectic. Whether you're rushing for your 9-5, logging in from home or gearing up for an early shift, breakfast often gets skipped or replaced with something unhealthy. We set  out to change that by  making breakfast easy, reliable, and right on time.</p>
          </div>
        </div>
        <div className='about_img'>
          <img src={Aboutpics} />
        </div>
        <div className='mission'>
          <div className='mission_wrapper'>
            <h1>Our Mission</h1>
            <p>Morning Bite was born from a simple truth; morning are hectic. Whether you're rushing for your 9-5, logging in from home or gearing up for an early shift, breakfast often gets skipped or replaced with something unhealthy. We set  out to change that by  making breakfast easy, reliable, and right on time.</p>
          </div>
        </div>
        <div className='made'>
          <div className='made_wrapper'>
            <h1>Made for Your Mornings</h1>
            <p>Morning Bite was born from a simple truth; morning are hectic. Whether you're rushing for your 9-5, logging in from home or gearing up for an early shift, breakfast often gets skipped or replaced with something unhealthy. We set  out to change that by  making breakfast easy, reliable, and right on time.</p>
          </div>
        </div>
        <Grow />
        <Footer />
      </AboutPage_wrapper>
    </AboutPage_content>
  )
}

export default AboutPage


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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .shape{
      width: 100%;
      height: 55vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .shape_wrapper{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        text-align: center;

        h1{
          font-size: 3.3rem;
          font-weight: 700;
        }

        p{
          line-height: 1.3rem;
        }
      }
    }

    .about_img{
      width: 100%;
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 80%;
        height: 100%;
      }
    }

    .mission{
      width: 100%;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff5ea;

      .mission_wrapper{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        text-align: center;

        h1{
          font-weight: 700;
        }

        p{
          line-height: 1.3rem;
        }
      }
    }

    .made{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .made_wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        background: linear-gradient(to bottom, rgba(16, 15, 15, 0.531),rgba(22, 22, 22, 0.531), rgba(15, 15, 15, 0.531)), url(${why3});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        
        h1{
          width: 80%;
          font-size: 2rem;
          font-weight: 700;
        }

        p {
          width: 80%;
          line-height: 1.3rem;
        }
      }
    }
`
