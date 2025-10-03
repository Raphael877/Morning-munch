import React from 'react'
import why1 from '../assets/why1.jpg'
import why2 from '../assets/why2.jpg'
import why3 from '../assets/why3.jpg'
import why4 from '../assets/why4.jpg'
import { FaRegClock } from "react-icons/fa6";
import { LuLeaf } from "react-icons/lu";
import { LuLaptop } from "react-icons/lu";
import { IoBicycleOutline } from "react-icons/io5";
import styled from 'styled-components'

const Why = () => {
    const Array = [
        {
            img: why1,
            icon: <FaRegClock/>,
            span: 'Save Time. ',
            desc: 'No more skipping meals or long waits; order in just a few clicks.'
        },
        {
            img: why2,
            icon: <LuLeaf />,
            span: 'Stay Healthy. ',
            desc: 'No more junk filled mornings; enjoy fresh meals that energize your day.'
        },
        {
            img: why3,
            icon: <LuLaptop />,
            span: 'Fits Lifestyle. ',
            desc: 'No more one-size choices; find breakfast that fits how you work.'
        },
        {
            img: why4,
            icon: <IoBicycleOutline/>,
            span: 'On-Time Delivery. ',
            desc: 'No more delays; get breakfast right when you need.'
        },
    ]
  return (
    <Why_content>
        <Why_wrapper>
            <Top>
                <h1>Why Morning Munch?</h1>
                <p>Because mpornings should be simple, not stressful.</p>
            </Top>
            <Bottom>
                <div className='bottom_wrapper'>
                    {Array.map((array) => (
                    <div className='card'>
                        <div className='card_wrapper'>
                            <img src={array.img} />
                            <div className='icon'>{array.icon}</div>
                            <p><span>{array.span}</span>{array.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </Bottom>
        </Why_wrapper>
    </Why_content>
  )
}

export default Why

const Why_content = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      height: auto;
      padding-top: 2rem;
    }
`

const Why_wrapper = styled.div`
    width: 90%;
    height: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 95%;
    }
    @media (max-width: 480px) {
      width: 90%;
    }
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    gap: 1rem;
    text-align: center;
    
`

const Bottom = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    .bottom_wrapper{
        width: 97%;
        height: 100%;
        display: flex;
        gap: 1rem;
        padding-top: 2.5rem;

        .card{
            width: 25%;
            height: 95%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #e0b5b5;
            border-radius: 0.5rem;

            .card_wrapper{
                width: 90%;
                height: 90%;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .icon{
                    color: #5bee5d;
                    font-size: 20px;
                    font-weight: bold;
                }

                img{
                    width: 100%;
                    height: 55%;
                    border-radius: 0.2rem;      
                }
                P{
                    span{
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .bottom_wrapper{
        /* flex-direction: column; */
        flex-wrap: wrap;

        .card{
            width: 48%;
            height: 20rem;
        }
      }
    }
    @media (max-width: 480px) {
      .bottom_wrapper{
        flex-direction: column;

        .card{
            width: 100%;
            height: 20rem;
        }
      }
    }
`