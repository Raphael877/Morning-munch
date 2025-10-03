import React from 'react'
import styled from 'styled-components'
import { IoBicycleOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { PiCookieLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const How = () => {
    const Array = [
        {
            icon: <FiUserCheck/> ,
            main: "Sign up",
            desc: "No more hassle or forms; create your account in seconds."
        },
        {
            icon: <IoLocationOutline/> ,
            main: "Browse Vendor",
            desc: "No more endless seraching; explore trusted cafes and restaurants nearby."
        },
        {
            icon: <PiCookieLight /> ,
            main: "Pick Breakfast",
            desc: "No more limited choices; select meals that fit your taste and routine in seconds."
        },
        {
            icon: <IoBicycleOutline/> ,
            main: "Get Delivery",
            desc: "No more morning stress; enjoy fresh breakfast delivered right on time."
        },
    ]
  return (
    <How_content>
        <How_wrapper>
            <h1>How it works?</h1>
            <p>Simple steps to a stress-free morning.</p>
            <div className='card_wrapper'>
                {Array.map((array) => (
                <div className='cards'>
                    <div className='icons'>{array.icon}</div>
                    <div className='details'>
                        <h3>{array.main}</h3>
                        <p>{array.desc}</p>
                    </div>
                </div>
                ))}
            </div>
        </How_wrapper>
    </How_content>
  )
}

export default How

const How_content = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff5ea;
    
    @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      height: 100vh;
    }
`

const How_wrapper = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .card_wrapper{
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 2rem;
        gap: 2rem;

        .cards{
            display: flex;
            width: 45%;
            height: 50%;
            gap: 1rem;

            .icons{
                    display: flex;
                    font-size: 2rem;
                    color: #61f063;
                }

            .details{
                display: flex;
                flex-direction: column;
                gap: 1rem;

                p{
                    width: 80%;
                }
            }
        }
    }

    @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      width: 90%;

      .card_wrapper{
        

        .cards{
            width: 100%;
            height: 20%;
        }
      }
    }
`
