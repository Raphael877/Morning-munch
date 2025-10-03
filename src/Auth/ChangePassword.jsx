import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";

const ChangePassword = ({ onClose, onSave }) => {
  const [current, setCurrent] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupData = JSON.parse(localStorage.getItem("signupData")) || {};
    if (!current || !newPwd || !confirm) {
      setError("All fields are required");
      return;
    }
    if (current !== signupData.password) {
      setError("Current password is incorrect");
      return;
    }
    if (newPwd.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }
    if (newPwd !== confirm) {
      setError("Passwords do not match");
      return;
    }
    onSave(newPwd);
  };

  return (
    <Content>
      <Container>
        <Form>
          <form className="form_wrapper" onSubmit={handleSubmit}>
            <div className="icon" onClick={onClose}>
              <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
            </div>
            <h1>Change Password</h1>
            <Input
              type="password"
              placeholder="Current Password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
            />
            <Input
              type="password"
              placeholder="New Password"
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Re-enter Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {error && (
              <span style={{ color: "red", fontSize: 12 }}>{error}</span>
            )}
            <Button className="btn" text="Save" type="submit" />
          </form>
        </Form>
      </Container>
    </Content>
  );
};

export default ChangePassword;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 35%;
  height: 70%;
  background-color: white;
  border-radius: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .form_wrapper {
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .icon {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 1.5rem;
    }
    h1 {
      text-align: center;
    }

    Input {
      width: 100%;
      height: 2.8rem;
      outline: none;
      border: 1px solid lightgray;
      border-radius: 0.5rem;
      padding-left: 1rem;
    }
    .btn {
      width: 100%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      color: white;
      background-color: #339e35;
      &:hover {
        cursor: pointer;
        background-color: #9a5912;
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
