import styled from "styled-components";

export const FormPartnerWrapper = styled.div`
  width: 100%;
  height: 38rem;
  display: flex;
  margin-bottom: 4rem;
  justify-content: center;
  font-family: sans-serif;
`;

export const FormPartnerinnerwrapper = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const FormPartnerLeft = styled.div`
  width: 50%;
  height: 100%;

  .form {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .input-box {
    width: 100%;
    height: 4rem;
    padding-inline: 1rem;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background-color: white;
    border: 1px solid lightgray;
  }

  .input {
    flex: 1;
    height: 100%;
    border: none;
    border-radius: 1rem;
    color: #000000e6;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
    position: relative;
  }
  .form .input-box:nth-of-type(3) .input::placeholder,
.form .input-box:nth-of-type(4) .input::placeholder {
  color: #302929;
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
`;

export const FormPartnerRight = styled.div`
  width: 50%;
  height: 80%;
  overflow: hidden;

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
    display: flex;

  }

  .img {
    width: 100%;
    height: 100%;      
    object-fit: cover; 
  }
`;
