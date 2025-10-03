import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";
import Input from "../Input";
import styled from "styled-components";
import axios from "axios";

const Verify = ({ onClose }) => {
  const [codes, setCodes] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;

  // If email is missing, redirect user back to signup
  useEffect(() => {
    if (!email) {
      // toast.error("No email provided for verification.");
      // navigate("/signup");
      navigate("/");
    }
  }, [email]);

  // Start countdown timer
  useEffect(() => {
    setTimer(60);
    setCanResend(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Auto stop timer when all digits are filled
  useEffect(() => {
    if (codes.every((code) => code !== "")) {
      clearInterval(intervalRef.current);
    }
  }, [codes]);

  const handleChange = (idx, value) => {
    if (/^\d?$/.test(value)) {
      const newCodes = [...codes];
      newCodes[idx] = value;
      setCodes(newCodes);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (codes.some((code) => code === "")) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "https://tca-project.onrender.com/api/verify",
        {
          email: email,
          otp: codes.join(""),
        }
      );

      if (res.data && res.data.message === "User verified Successfully") {
        toast.success("Verification successful!");
        setTimeout(() => {
          navigate("/webapp");
        }, 1200);
      } else {
        toast.error(res.data.message || "Verification failed. Try again.");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Verification failed. Please try again later.");
      }
    }
  };

  return (
    <Verify_content>
      <ToastContainer position="top-right" autoClose={3000} />
      <Verify_container>
        <Form>
          <form className="form_wrapper" onSubmit={handleSubmit}>
            <div className="icon" onClick={onClose}>
              <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
            </div>
            <h1>Verify Email Address</h1>
            <p className="small_sign">
              Please input the code sent to your email
            </p>
            <div className="input_block">
              {codes.map((code, idx) => (
                <Input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  style={{ textAlign: "center", fontSize: "1.5rem" }}
                />
              ))}
            </div>
            <Button className="btn" text="Complete Sign Up" type="submit" />
            <div className="have">
              Didn't receive the code?{" "}
              <span
                style={{
                  color: canResend ? "#339e35" : "#8c8b8b",
                  cursor: canResend ? "pointer" : "not-allowed",
                }}
                onClick={() => {
                  if (canResend) {
                    setTimer(60);
                    setCanResend(false);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setTimer((prev) => {
                        if (prev <= 1) {
                          clearInterval(intervalRef.current);
                          setCanResend(true);
                          return 0;
                        }
                        return prev - 1;
                      });
                    }, 1000);
                    // Optional: Trigger resend OTP API here
                  }
                }}
              >
                Resend ({timer}s)
              </span>
            </div>
          </form>
        </Form>
      </Verify_container>
    </Verify_content>
  );
};

export default Verify;



const Verify_content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
`;

const Verify_container = styled.div`
  width: 33%;
  height: 55%;
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
  position: relative;

  .form_wrapper {
    width: 80%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    .icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
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

    .input_block {
      display: flex;
      width: 100%;
      height: 20%;
      gap: 1rem;

      Input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 25px;
        background-color: #f2e8e8;
        padding-left: 50%;
        border-radius: 1rem;
      }
    }

    .btn {
      width: 21rem;
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
