import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import { ApiLogin } from "../utils/config/Api/Api"; // 

const Login = ({ onClose, onShowSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await ApiLogin({ email, password });

        if (res?.data?.token) {
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/webapp");
          }, 1200);
        } else {
          toast.error(res?.data?.message || "Login failed. Try again.");
        }
      } catch (err) {
        if (err.response?.data?.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error("Login failed. Please try again later.");
        }
      }
    } else {
      Object.values(validationErrors).forEach((msg) => toast.error(msg));
    }
  };

  return (
    <Login_content>
      <ToastContainer position="top-right" autoClose={3000} />
      <Login_container>
        <Form>
          <form className="form_wrapper" onSubmit={handleSubmit}>
            <div className="icon" onClick={onClose}>
              <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
            </div>
            <h1>Sign In</h1>
            <p className="small_sign">Sign in to continue</p>
            <Input
              type="email"
              className="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              className="pwd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="btn" text="Sign In" type="submit" />
            <div className="have">
              New to MorningMunch?{" "}
              <span onClick={onShowSignup} style={{ cursor: "pointer" }}>
                Sign Up
              </span>
            </div>
          </form>
        </Form>
      </Login_container>
    </Login_content>
  );
};

export default Login;

const Login_content = styled.div`
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

const Login_container = styled.div`
  width: 33%;
  height: 70vh;
  background-color: white;
  border-radius: 1rem;

  @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
    }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .form_wrapper {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .icon {
      width: 100%;
      height: 8%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 1.5rem;
    }

    h1 {
      text-align: center;
    }

    .small_sign {
      text-align: center;
      font-size: 14px;
      color: #8c8b8b;
    }

    Input {
      width: 100%;
      height: 2.5rem;
      outline: none;
      border: 1px solid lightgray;
      border-radius: 0.5rem;
      padding-left: 1rem;
    }
    Input::placeholder {
      color: #363333;
      font-size: 12px;
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
    .have {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #8c8b8b;
      gap: 0.3rem;

      span {
        color: #339e35;
        cursor: pointer;
      }
    }
  }
`;