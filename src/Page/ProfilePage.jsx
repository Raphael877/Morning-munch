import React, { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import SecondHeader from "../Components/SecondHeader";
import ChangeName from "../Auth/ChangeName";
import ChangeEmail from "../Auth/ChangeEmail";
import ChangePassword from "../Auth/ChangePassword";
import styled from "styled-components";

const ProfilePage = () => {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  useEffect(() => {
    // Get user info from localStorage
    const signupData = JSON.parse(localStorage.getItem("signupData")) || {};
    const loginData = JSON.parse(localStorage.getItem("loginData")) || {};
    setUserInfo({
      name: signupData.firstname || "",
      email: signupData.email || loginData.email || "",
    });
  }, []);

  const handleNameChange = (newName) => {
    // Update localStorage and state
    const signupData = JSON.parse(localStorage.getItem("signupData")) || {};
    signupData.firstname = newName;
    localStorage.setItem("signupData", JSON.stringify(signupData));
    setUserInfo((prev) => ({ ...prev, name: newName }));
    setShowNameModal(false);
  };
  const handleEmailChange = (newEmail) => {
    const signupData = JSON.parse(localStorage.getItem("signupData")) || {};
    signupData.email = newEmail;
    localStorage.setItem("signupData", JSON.stringify(signupData));
    setUserInfo((prev) => ({ ...prev, email: newEmail }));
    setShowEmailModal(false);
  };
  const handlePasswordChange = (newPassword) => {
    const signupData = JSON.parse(localStorage.getItem("signupData")) || {};
    signupData.password = newPassword;
    localStorage.setItem("signupData", JSON.stringify(signupData));
    setShowPasswordModal(false);
  };

  return (
    <Content>
      <Wrapper>
        <SecondHeader />
        <Details>
          <Top>
            <div className="left">
              <div
                className="one"
                onClick={() => setShowNameModal(true)}
                style={{ cursor: "pointer" }}
              >
                <CiUser />
              </div>
              <div className="two">
                <h3>Name</h3>
                <p>{userInfo.name}</p>
              </div>
            </div>
            <div
              className="three"
              onClick={() => setShowNameModal(true)}
              style={{ cursor: "pointer" }}
            >
              <LuNotebookPen />
            </div>
          </Top>
          <Mid>
            <div className="left">
              <div
                className="one"
                onClick={() => setShowEmailModal(true)}
                style={{ cursor: "pointer" }}
              >
                <CiMail />
              </div>
              <div className="two">
                <h3>Email</h3>
                <p>{userInfo.email}</p>
              </div>
            </div>
            <div
              className="three"
              onClick={() => setShowEmailModal(true)}
              style={{ cursor: "pointer" }}
            >
              <LuNotebookPen />
            </div>
          </Mid>
          <Bottom>
            <div className="onetwo">
              <IoLockClosedOutline />
              <h3>Change Password</h3>
            </div>
            <div
              className="three"
              onClick={() => setShowPasswordModal(true)}
              style={{ cursor: "pointer" }}
            >
              <IoIosArrowForward />
            </div>
          </Bottom>
        </Details>
        {showNameModal && (
          <ChangeName
            onClose={() => setShowNameModal(false)}
            onSave={handleNameChange}
          />
        )}
        {showEmailModal && (
          <ChangeEmail
            onClose={() => setShowEmailModal(false)}
            onSave={handleEmailChange}
          />
        )}
        {showPasswordModal && (
          <ChangePassword
            onClose={() => setShowPasswordModal(false)}
            onSave={handlePasswordChange}
          />
        )}
      </Wrapper>
    </Content>
  );
};

export default ProfilePage;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Details = styled.div`
  width: 40%;
  height: 50%;
`;

const Top = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  border-bottom: 1px solid lightgray;
  padding-top: 2rem;
  &:hover {
    background-color: lightgray;
  }

  .left {
    display: flex;
    gap: 0.5rem;

    .one {
      font-size: 20px;
      font-weight: bold;
    }
    .two {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
  }
`;

const Mid = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  border-bottom: 1px solid lightgray;
  padding-top: 2rem;
  &:hover {
    background-color: lightgray;
  }

  .left {
    display: flex;
    gap: 0.5rem;

    .one {
      font-size: 20px;
      font-weight: bold;
    }
    .two {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  border-bottom: 1px solid lightgray;
  padding-top: 2rem;
  &:hover {
    background-color: lightgray;
  }

  .onetwo {
    display: flex;
    gap: 0.5rem;
    width: 60%;
    height: 100%;
    padding-top: 0.7rem;
  }

  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
