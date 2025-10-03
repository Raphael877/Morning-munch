import React from 'react'
import styled from 'styled-components'
import Hero_image from '../assets/Hero_image.jpg'

const Hero = () => {
  return (
    <Hero_content>
        <Hero_wrapper>
            <h1>Start Your Day Right<br></br>Breakfast Delivered Fresh.</h1>
            <p>No more rushing or skipping meals. Discover trusted breakfast spots near you,<br></br> order in minutes, and enjoy a stress-free morning</p>
            
        </Hero_wrapper>
    </Hero_content>
  )
}

export default Hero

const Hero_content = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(to top, rgba(16, 15, 15, 0.531),rgba(22, 22, 22, 0.531) , rgba(24, 23, 23, 0.531)), url(${Hero_image}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    margin-top: 20vh;

     @media (max-width: 768px) {
        height: 60vh;
    }
    @media (max-width: 480px) {
      height: 60vh;
    }
`

const Hero_wrapper = styled.div`
    width: 59%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h1{
        text-align: center;
        font-size: 3.2rem;
        font-weight: 800;
    }
    p{
        text-align: center;
        font-size: 17px;
        line-height: 25px;
    }

    @media (max-width: 768px) {
        width: 95%;
        height: 90%;
        gap: 0.5rem;

        h1{
        font-size: 3rem;
        font-weight: 800;
      }
      p{
        font-size: 16px;
      }
    
    }
    @media (max-width: 480px) {
      width: 95%;
      height: 90%;
      gap: 0.5rem;

      h1{
        font-size: 2.5rem;
        font-weight: 800;
      }
      p{
        font-size: 16px;
      }
    }
    
`