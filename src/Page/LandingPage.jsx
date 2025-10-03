import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Why from "../Components/Why";
import Explore from "../Components/Explore";
import How from "../Components/How";
import Loved from "../Components/Loved";
import Grow from "../Components/Grow";
import Footer from "../Components/Footer";
import styled from "styled-components";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import Verify from "../Auth/Verify";

import { useState } from "react";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setShowVerify(false);
  };
  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setShowVerify(false);
  };
  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowVerify(false);
  };
  const handleShowVerify = () => {
    setShowVerify(true);
    setShowSignup(false);
    setShowLogin(false);
  };

  return (
    <LandingPage_content>
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      {showLogin && (
        <Login onClose={handleClose} onShowSignup={handleSignupClick} />
      )}
      {showSignup && (
        <Signup
          onClose={handleClose}
          onShowVerify={handleShowVerify}
          onShowLogin={handleLoginClick}
        />
      )}
      {showVerify && <Verify onClose={handleClose} />}
      <Hero />
      <Why />
      <Explore />
      <How />
      <Loved />
      <Grow />
      <Footer />
    </LandingPage_content>
  );
};

export default LandingPage;

const LandingPage_content = styled.div`
  position: relative;
`;
