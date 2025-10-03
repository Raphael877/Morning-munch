import React from "react";
import caro1 from "../assets/caro1.jpg";
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.jpeg'
import caro4 from '../assets/caro4.png'
import caro5 from '../assets/caro5.png'
import caro6 from '../assets/caro6.png'
import caro7 from '../assets/caro7.png'
import caro8 from '../assets/caro8.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

const Explore = () => {
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

  const Card = [
    {
      img: caro1,
      food: "Toasties"
    },
    {
      img: caro2,
      food: "Nuli"
    },
    {
      img: caro3,
      food: "Akara & co"
    },
    {
      img: caro4,
      food: "Cafe One"
    },
    {
      img: caro5,
      food: "CitySubs"
    },
    {
      img: caro6,
      food: "The Colossus Lagos"
    },
    {
      img: caro7,
      food: "Toasties"
    },
    {
      img: caro8,
      food: "So Fresh"
    }
  ]
  return (
    <Explore_content>
      <Explore_wrapper>
        <Top>
          <h1>
            Explore Our Partner<br></br>Cafes & Restaurants
          </h1>
          <p>Ready to serve your mornings</p>
        </Top>
        <Bottom>
          <Bottom_wrapper>
            <div className="slider-container">
              <Slider {...settings} className="slider">
                {Card.map((card) => (
                <div className="caro_div">
                  <img src={card.img} />
                  <h3>{card.food}</h3>
                  <p>Lagos</p>
                </div>
                ))}
              </Slider>
            </div>
          </Bottom_wrapper>
        </Bottom>
      </Explore_wrapper>
    </Explore_content>
  );
};

export default Explore;

const Explore_content = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
      height: 70vh;
      margin-top: 10vh;
    }
    @media (max-width: 480px) {
      
    }
  
`;

const Explore_wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      gap: 0.2rem;
    }
`;

const Top = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    line-height: 3rem;
    font-size: 2.4rem;
    font-weight: bolder;
  }

  @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      width: 90%;

      h1{
        font-size: 2rem;
      }
    }
`;
const Bottom = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom_wrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;

  .slider-container {
    width: 100%;
    height: 100%;

    .slider {
      width: 100%;
      height: 100%;

      .caro_div {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;

        img {
          width: 340px;
          height: 170px;
          border-radius: 1rem;
        }

        h3{
          padding-block: 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .slider-container{
        .slider{
          .caro_div{
            width: 100%;

            img{
              width: 500px;
            }
          }
        }
      }
    }
    @media (max-width: 480px) {
      .slider-container{
        .slider{
          .caro_div{
            width: 100%;

            img{
              width: 500px;
            }
          }
        }
      }
    }
`;
