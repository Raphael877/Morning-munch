import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Header = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Header_content>
      <Header_wrapper>
        <Left>
          <div
            className="brandname"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            MorningMunch
          </div>
        </Left>
        <Mid>
          <ul>
            <li className="abt"
              onClick={() => navigate("/about")}
              style={
                location.pathname === "/about" ? { fontWeight: "bold", color: "#339e35" } : {}
              }>About</li>
            <li
              className="prt"
              onClick={() => navigate("/partner")}
              style={
                location.pathname === "/partner" ? { fontWeight: "bold", color: "#339e35" } : {}
              }
            >
              Partner
            </li>
            <li className="how"
              onClick={() => navigate("/how")}
              style={
                location.pathname === "/how" ? { fontWeight: "bold", color: "#339e35" } : {}
              }>How it works</li>
          </ul>
        </Mid>
        <Right>
          <div className="header_btn">
            <Button
              type="button"
              text="Login"
              className="btn1"
              onClick={onLoginClick}
            />
            <Button
              type="button"
              text="Sign up"
              className="btn2"
              onClick={onSignupClick}
            />
          </div>
        </Right>
      </Header_wrapper>
    </Header_content>
  );
};

export default Header;

const Header_content = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: sans-serif;
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;

`;

const Header_wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px){
    height: 20vh;
    flex-direction: column;
  }
`;

const Left = styled.div`
  color: #339e35;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
`;

const Mid = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    li {
      list-style-type: none;
      font-size: 15px;
      &:hover {
        color: #339e35;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 480px) {
    width: 80%;
  } 
`;
const Right = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .header_btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .btn1 {
      width: 4.5rem;
      height: 2.5rem;
      font-size: 16px;
      color: #339e35;
      border-radius: 2rem;
      border: 1px solid #339e35;
      background-color: transparent;
      &:hover {
        cursor: pointer;
        background-color: #339e35;
        color: white;
        transition: all 0.5s ease-in-out;
      }
    }

    .btn2 {
      width: 5rem;
      height: 2.5rem;
      font-size: 16px;
      border-radius: 2rem;
      color: white;
      background-color: #339e35;
      border: none;
      &:hover {
        cursor: pointer;
        background-color: #9a5912;
        color: white;
        transition: all 0.5s ease-in-out;
      }
    }
  }

  @media (max-width: 768px) {
    
  }
  @media (max-width: 480px) {
      width: 50%;

      .btn1, .btn2{
        width: 4rem;
        height: 2rem;
      }
    }
  
`;
