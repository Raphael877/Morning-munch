import React from 'react'
import styled from 'styled-components'
import Grow3 from '../assets/grow3.jpg'
// import { RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";

const Secondformpartner = () => {
  return (
    <Secondformpartner_content>
        <Secondformpartner_wrapper>
            <Image_part>
            </Image_part>
            <Formpart>
                <Left className="form">
                          <div className="input-box">
                            <input
                              type="text"
                              placeholder="First name"
                              className="input"
                              required
                            />
                          </div>
                
                          <div className="input-box">
                            <input type="text" placeholder="Last name" className="input"  readOnly/>
                          </div>
                
                          <div className="input-box">
                            <input type="text" placeholder="Gender" className="input"  readOnly/>
                                  {/* <RiArrowDropDownLine  style={{fontSize:"1.7rem", fontWeight:"100",cursor:"pointer"}}/> */}
                          </div>
                          <nav className="form-bottom">
            <div className="checkbox-span-wrapper">
            <input type="checkbox" className="checkbox" />
            <span className="create-account-text">By creating this account, i accept the terms and condition of Morning munch</span>
            </div>
            <div>
            <button type="submit" className="submit-btn"> Submit</button>
            </div>
          </nav>
                </Left>
                <Right className="form">
                    <div className="input-box">
            <input type="email" placeholder="Email Address" className="input" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Phone Number" className="input" />
          </div>
          
          <div className="input-box">
            <input type="text" placeholder='Attach your CV' className="input" />
          </div>
                </Right>
            </Formpart>
        </Secondformpartner_wrapper>
    </Secondformpartner_content>
  )
}

export default Secondformpartner

const Secondformpartner_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

const Secondformpartner_wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image_part = styled.div`
    width: 100%;
    height: 85vh;
    background-image: url(${Grow3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 4rem;
`
const Formpart = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    gap: 1rem;
`

const Left = styled.form`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .input-box{
        width: 100%;
        height: 3.7rem;
        border-radius: 0.5rem;
        border: 1px solid lightgray;
        overflow: hidden;

        input{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding-inline: 1rem;
            font-size: 1rem;
        }
    }

    .form-bottom{
      width: 100%;
      height: 18%;
      padding-block: 0.3rem;
    
   }
   .checkbox-span-wrapper{
      display: flex;
      gap: 0.5rem;
   }
 
   .checkbox{
      width:2.5rem;
      height:1.5rem; 
      border: 1px solid green;
      cursor:pointer;
      border: none;
      
   }
   .create-account-text{
     color: gray;
     font-size: 1rem;
   }
   .submit-btn {
      width: 16%;
      height: 2.2rem;
      background-color: #44b946;
      color: white;
      font-size: 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-top: 1rem;
      &:hover {
        background-color: #267326;
        transition: all 0.5s ease-in-out;
      }
    }
    
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .input-box{
        width: 100%;
        height: 3.7rem;
        border-radius: 0.5rem;
        border: 1px solid lightgray;
        overflow: hidden;

        input{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding-inline: 1rem;
            font-size: 1rem;
        }
    }
`