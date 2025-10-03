import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import axios from "axios";
import { ApiSignup } from "../utils/config/Api/Api";

const Signup = ({ onClose, onShowVerify, onShowLogin, onFinish }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstname = "First name is required";
    if (!form.lastName) newErrors.lastname = "Last name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.phoneNumber) newErrors.phonenumber = "Phone number is required";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 1) newErrors.password = "Input password";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await ApiSignup(form);

        if (res.data && res.status === 201) {
          console.log(res.data);
          toast.success("Signup successful! Please verify your email.");
          // navigate("/verify", { state: { email: form.email } });
          if (onClose) onClose();
          if (onShowVerify) onShowVerify();
          if (onFinish) onFinish();
          // navigate("/verify", { state: { email: form.email } });
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error("Signup failed. Please try again later.");
        }
      }
    } else {
      Object.values(validationErrors).forEach((msg) => toast.error(msg));
    }
  };

  return (
    <Signup_content>
      <Signup_container>
        <Form>
          <form className="form_wrapper" onSubmit={handleSubmit}>
            <div className="icon" onClick={onClose}>
              <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
            </div>
            <h1>Sign Up</h1>
            <p className="small_sign">Sign up to continue</p>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={form.phoneNumber}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <Button className="btn" text="Next" type="submit" />
            <div className="have">
              Have an account?{" "}
              <span onClick={onShowLogin} style={{ cursor: "pointer" }}>
                Sign In
              </span>
            </div>
          </form>
        </Form>
      </Signup_container>
      
    </Signup_content>
  );
};

export default Signup;

const Signup_content = styled.div`
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

const Signup_container = styled.div`
  width: 35%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;

  @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
      width: 100%;
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
    height: 95%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
