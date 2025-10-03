import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";

const ChangeEmail = ({ onClose, onSave }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Invalid email format");
      return;
    }
    onSave(email.trim());
  };

  return (
    <Content>
      <Container>
        <Form>
          <form className="form_wrapper" onSubmit={handleSubmit}>
            <div className="icon" onClick={onClose}>
              <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
            </div>
            <h1>Change Email</h1>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default ChangeEmail;

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
  height: 50%;
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
    gap: 1.5rem;

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
      height: 4rem;
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
