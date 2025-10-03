import React from "react";
import Login from "../../Auth/Login";
import Signup from "../../Auth/Signup";
import PartnerHero from "../../Components/PartnerHero";
import FormPartner from "../../Components/FormPartner";
import BuildCareer from "../../Components/BuildCareer";
import Header from "../../Components/Header";
import Secondformpartner from "../../Components/Secondformpartner";
import Footer from "../../Components/Footer";
import styled from "styled-components";

const Partner = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleSignupClick = () => setShowSignup(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseSignup = () => setShowSignup(false);

  return (
    <PartnerWrapper>
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      {showLogin && <Login onClose={handleCloseLogin} />}
      {showSignup && <Signup onClose={handleCloseSignup} />}
      <PartnerHero />
      <FormPartner />
      <BuildCareer />
      <Secondformpartner />
      <Footer />
    </PartnerWrapper>
  );
};

export default Partner;

const PartnerWrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
