import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

const SecondHeader = () => {
  const navigate = useNavigate();
  return (
    <Content>
      <Wrapper>
        <Left>
          <div
            className="brandname"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            MorningMunch
          </div>
          <FaLocationDot className="locate" />
          <p>Location</p>
          <FaAngleDown />
        </Left>
        <Right>
          <div className="input_div">
            <IoMdSearch />
            <input type="text" placeholder="Search" className="input" />
          </div>
          <div className="cart_div"
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer" }}>
            <FiShoppingCart />
          </div>
          <div
            className="profile_div"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          >
            <CiUser />
          </div>
        </Right>
      </Wrapper>
    </Content>
  );
};

export default SecondHeader;

const Content = styled.div`
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

const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  .brandname {
    display: flex;
    align-items: center;
    color: #339e35;
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
  }

  .locate {
    color: #339e35;
    font-size: 1.3rem;
  }
`;

const Right = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;

  .input_div {
    display: flex;
    width: 80%;
    height: 2.5rem;
    align-items: center;
    border: 1px solid gray;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    overflow: hidden;
    gap: 1rem;
    padding-left: 0.5rem;

    .input {
      width: 90%;
      height: 100%;
      outline: none;
      border: none;
    }
    .input::placeholder {
      font-size: 1rem;
    }
  }
  .cart_div,
  .profile_div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #339e35;
    color: white;
    cursor: pointer;
  }
`;
