import React from 'react'
import styled from 'styled-components'
import { Outlet } from "react-router-dom";
import SecondHeader from '../Components/SecondHeader'
import WebApp_image from '../assets/WebApp_image.png'
import { FaRegStar } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";
import { PiCookieLight } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom'
// import { TbCurrencyNaira } from "react-icons/tb";
// import SoFresh_All from '../Restaurants/SoFresh_folder/SoFresh_All'

const SoFresh = () => {
  const navigate = useNavigate();
  return (
    <SoFresh_content>
        <SoFresh_wrapper>
            <SecondHeader />
            <Image_background></Image_background>
            <Info>
              <div className='top'>
                <div className='restaurant_logo'></div>
                <div className='restaurant_details'>
                    <div className='restaurant_name'>
                      <h2>So Fresh</h2>
                    </div>
                    <div className='restaurant_info'>
                      <p><i>Serving wholesome breakfast since 2015, with local favorites and international classics</i></p>
                    </div>
                </div>
              </div>
              <div className='mid'>
                  <div className='one'><FaRegStar style={{color:'#5fd861', fontSize:'1.2rem'}}/>4.7(120 reviews)<div className='dot'></div></div>
                  <div className='two'><RiTimerLine style={{color:'#5fd861',fontSize:'1.2rem'}}/>20-30 mins<div className='dot'></div></div>
                  <div className='three'><PiCookieLight style={{color:'#5fd861',fontSize:'1.2rem'}}/>Breakfast Cafe<div className='dot'></div></div> 
                  <div className='four'><PiCookieLight style={{color:'#5fd861',fontSize:'1.2rem'}}/>400 - 1500 Delivery Fee</div> 
              </div>
            </Info>
            <Categories>
              <div className='categories_wrapper'>
                <div className='main'>
                <div className='categories'>
                  <h3>Categories</h3>
                </div>
                <ul>
                  <li onClick={() => navigate("")}><p style={{fontWeight: 'bold', color: '#5fd861'}}>All</p><hr style={{borderBottom: '1px solid #5fd861'}}></hr></li>
                  <li onClick={() => navigate("sandwich")}><p>Sandwiches and Salads</p><hr style={{display: "none"}}></hr></li>
                  <li onClick={() => navigate("milkshakes")}><p>Milkshakes</p><hr style={{display: "none"}}></hr></li>
                  <li onClick={() => navigate("drinks")}><p>Drinks</p><hr style={{display: "none"}}></hr></li>
                  <li onClick={() => navigate("smoothies")}><p>Smoothies</p><hr style={{display: "none"}}></hr></li>
                </ul>
              </div>
              </div>
            </Categories>
            <Outlet />
        </SoFresh_wrapper>
    </SoFresh_content>
  )
}

export default SoFresh

const SoFresh_content = styled.div`
    width: 100%;
    height: auto;
`

const SoFresh_wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Image_background = styled.div`
  width: 100%;
  height: 40vh;
  background: linear-gradient(to top, rgba(41, 40, 40, 0.531),rgba(53, 53, 53, 0.531) , rgba(24, 23, 23, 0.531)), url(${WebApp_image});
  margin-top: 20vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Info = styled.div`
  width: 82%;
  height: auto;
  margin-top: 9vh;
  display: flex;
  flex-direction: column;

  .top{
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;

    .restaurant_logo{
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-image: url(${WebApp_image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .restaurant_details{
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      .restaurant_name{
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }

  .mid{
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 5rem;

    .one, .two, .three, .four{
      display: flex;
      align-items: center;
      gap: 0.2rem;

      .dot{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: grey;
        margin-inline: 1rem;
      }
    }
  }
`
const Categories = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
    top: 20vh;
    background-color: white;
    z-index: 1;

  .categories_wrapper{
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    
    .main{
      width: 82%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    

    .categories{
      width: 100%;
      font-size: 1.15rem;
      display: flex;
    }

    ul{
      display: flex;
      list-style-type: none;

      li{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        cursor: pointer;
        &:hover{
          color: #5fd861;
          transition: all 350ms ease-in-out;
        }
        
        p{
          padding-inline: 1rem;
        }
      }
    }
    }
  }
`
