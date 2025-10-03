import React from 'react'
import caro1 from '../assets/caro1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Slider from "react-slick";

const Loved = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 0.04,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: "linear"
  };

  const Testimony = [
    {
        text: "Ordering for my friends and I is super easy. Everyone gets exactly what they want.",
        name: "Olaoluwa Daniels"
    },
    {
        text: "I used to rush out hungry, but now i always have something fresh and ready before work",
        name: "Shola"
    },
    {
        text: "No more skipping breakfast before classes. I love how fast and reliable it is.",
        name: "Amaka"
    },
    {
        text: "The delivery is smooth and consistent, I can finally enjoy breakfast without stress and hassle.",
        name: "Charles Godfrey"
    },
    {
        text: "Morning Bites has completely change my mornings. I never have to worry about skipping breakfast again.",
        name: "Tosin Adewale"
    }
  ]
  return (
    <Loved_content>
        <Loved_wrapper>
            <Top>
                <h1>Loved by Busy Mornings, <span>Trusted by Users</span></h1>
                <p>Real stories from people who made breakfast simple with Morning Bites.</p>
            </Top>
            <Bottom>
                <Bottom_wrapper>
                    <div className="slider-container">
      <Slider {...settings} className='slider'>
        {Testimony.map((test) =>(
        <div className='caro_div'>
            <div className='caro_wrapper'>
                <p>{test.text}</p>
                <h3>{test.name}</h3>
            </div>
        </div>
        ))}
      </Slider>
    </div>
                </Bottom_wrapper>
            </Bottom>
        </Loved_wrapper>
    </Loved_content>
  )
}

export default Loved

const Loved_content = styled.div`
    width: 100%;
    height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 60vh;
      align-items: center;
    }
    @media (max-width: 480px) {
      width: 100%;
      align-items: center;
    }
    
`

const Loved_wrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 480px) {
      justify-content: center;
    }
`
const Top = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1{
        line-height: 3rem;
        font-size: 2.4rem;
        font-weight: bolder;

        span{
            color: #339e35;
        }
    }

    @media (max-width: 768px) {
    width: 100%;
      text-align: center;
    }
    @media (max-width: 480px) {
      width: 100%;
      text-align: center;
    }
`
const Bottom = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`
const Bottom_wrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    .slider-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .slider{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .caro_div{
                width: 20%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0.5rem;
                border: 1px solid lightgray;
                background-color: white;

                .caro_wrapper{
                    width: 340px;
                    height: 170px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-top: 10px;
                    padding-block: 15px;
                    padding-left: 10px; 
                }
            }
        }
    }
`