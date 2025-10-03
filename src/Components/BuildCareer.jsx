
import{
    BuildCareerWrapper
} from "./BuildCareerStyle"

const BuildCareer = () => {
  return (
    <BuildCareerWrapper>
     <article className="career-wrapper">
         <h1 className="career-header">Build Your Career With Us</h1>
         <div className="career-subtext-holder">
         <p className="career-subtext">Take the next step in a Workplace that values growth creativity and purpose where your <br />ideas matter your skill thrive and your career finds direction</p>
         </div>
     </article>
    </BuildCareerWrapper>
  )
}

export default BuildCareer


// import { LiaTimesCircleSolid } from "react-icons/lia";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Button from "../Button";
// import Input from "../Input";
// import styled from "styled-components";
// import axios from "axios";

// const Login = ({ onClose, onShowSignup }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!password) {
//       newErrors.password = "Password is required";
//     }
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         // Replace with your actual login API endpoint
//         const res = await axios.post(
//           "https://tca-project.onrender.com/api/login",
//           { email, password }
//         );
//         if (res.data && res.data.success) {
//           toast.success("Login Successful");
//           setTimeout(() => {
//             navigate("/webapp");
//           }, 1200);
//         } else {
//           toast.error(res.data.message || "Login failed. Try again.");
//         }
//       } catch (err) {
//         if (err.response && err.response.data && err.response.data.message) {
//           toast.error(err.response.data.message);
//         } else {
//           toast.error("Login failed. Please try again later.");
//         }
//       }
//     } else {
//       Object.values(validationErrors).forEach((msg) => toast.error(msg));
//     }
//   };

//   return (
//     <Login_content>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Login_container>
//         <Form>
//           <form className="form_wrapper" onSubmit={handleSubmit}>
//             <div className="icon" onClick={onClose}>
//               <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
//             </div>
//             <h1>Sign In</h1>
//             <p className="small_sign">Sign in to continue</p>
//             <Input
//               type="email"
//               className="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               type="password"
//               className="pwd"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button className="btn" text="Sign In" type="submit" />
//             <div className="have">
//               New to MorningMunch?{" "}
//               <span onClick={onShowSignup} style={{ cursor: "pointer" }}>
//                 Sign Up
//               </span>
//             </div>
//           </form>
//         </Form>
//       </Login_container>
//     </Login_content>
//   );
// };

// export default Login;

// const Login_content = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 2;
//   position: fixed;
//   top: 0;
//   left: 0;
// `;

// const Login_container = styled.div`
//   width: 33%;
//   height: 70vh;
//   background-color: white;
//   border-radius: 1rem;
// `;

// const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   align-items: center;

//   .form_wrapper {
//     width: 90%;
//     height: 90%;
//     display: flex;
//     flex-direction: column;
//     gap: 1.2rem;

//     .icon {
//       width: 100%;
//       height: 8%;
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       font-size: 1.5rem;
//     }

//     h1 {
//       text-align: center;
//     }

//     .small_sign {
//       text-align: center;
//       font-size: 14px;
//       color: #8c8b8b;
//     }

//     Input {
//       width: 100%;
//       height: 2.5rem;
//       outline: none;
//       border: 1px solid lightgray;
//       border-radius: 0.5rem;
//       padding-left: 1rem;
//     }
//     Input::placeholder {
//       color: #363333;
//       font-size: 12px;
//     }

//     .btn {
//       width: 100%;
//       height: 2.5rem;
//       border-radius: 0.5rem;
//       border: none;
//       outline: none;
//       color: white;
//       background-color: #339e35;
//       &:hover {
//         cursor: pointer;
//         background-color: #9a5912;
//         transition: all 0.5s ease-in-out;
//       }
//     }
//     .have {
//       width: 100%;
//       height: 10%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 14px;
//       color: #8c8b8b;
//       gap: 0.3rem;

//       span {
//         color: #339e35;
//         cursor: pointer;
//       }
//     }
//   }
// `;






// import axios from "axios";
// const BaseURL = import.meta.env.VITE_baseURL;

// export const ApiSignup = async (value, setRes) => {
//   try {
//     console.log(value);
//     const res = await axios.post(`${BaseURL}` + "users", value);
//     // setRes(res?.data);
//     return res;
//   } catch (err) {
//     console.log("error", err);
//   }
// };
// export const ApiLogin = async (value, setRes) => {
//   try {
//     console.log(value);
//     const res = await axios.post(`${BaseURL}/users/login`, value);
//     setRes(res?.data);
//   } catch (err) {
//     console.log("error", err);
//   }
// };







// import { LiaTimesCircleSolid } from "react-icons/lia";
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Button from "../Button";
// import Input from "../Input";
// import styled from "styled-components";
// import axios from "axios";

// const Verify = ({ onClose }) => {
//   const [codes, setCodes] = useState(["", "", "", ""]);
//   const [errors, setErrors] = useState("");
//   const [timer, setTimer] = useState(60);
//   const [canResend, setCanResend] = useState(false);
//   const intervalRef = useRef(null);
//   const navigate = useNavigate();

//   const handleChange = (idx, value) => {
//     // Only allow numbers and max 1 digit per field
//     if (/^\d?$/.test(value)) {
//       const newCodes = [...codes];
//       newCodes[idx] = value;
//       setCodes(newCodes);
//     }
//   };

//   useEffect(() => {
//     // Start countdown when modal opens
//     setTimer(60);
//     setCanResend(false);
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(intervalRef.current);
//           setCanResend(true);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     // Stop timer if all codes are filled
//     if (codes.every((code) => code !== "")) {
//       clearInterval(intervalRef.current);
//     }
//   }, [codes]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (codes.some((code) => code === "")) {
//       toast.error("All fields are required");
//       return;
//     }
//     try {
//       // Replace with your actual verify API endpoint
//       const res = await axios.post(
//         "https://tca-project.onrender.com/api/verify",
//         { code: codes.join("") }
//       );
//       if (res.data && res.data.success) {
//         toast.success("Verification successful!");
//         setTimeout(() => {
//           navigate("/webapp");
//         }, 1200);
//       } else {
//         toast.error(res.data.message || "Verification failed. Try again.");
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         toast.error(err.response.data.message);
//       } else {
//         toast.error("Verification failed. Please try again later.");
//       }
//     }
//   };

//   return (
//     <Verify_content>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Verify_container>
//         <Form>
//           <form className="form_wrapper" onSubmit={handleSubmit}>
//             <div className="icon" onClick={onClose}>
//               <LiaTimesCircleSolid style={{ cursor: "pointer" }} />
//             </div>
//             <h1>Verify Email Address</h1>
//             <p className="small_sign">
//               Please input code sent to your your number
//             </p>
//             <div className="input_block">
//               {codes.map((code, idx) => (
//                 <Input
//                   key={idx}
//                   type="number"
//                   value={code}
//                   onChange={(e) => handleChange(idx, e.target.value)}
//                   maxLength={1}
//                   style={{ textAlign: "center" }}
//                 />
//               ))}
//             </div>
//             <Button className="btn" text="Complete Sign Up" type="submit" />
//             <div className="have">
//               Didn't receive the code?{" "}
//               <span
//                 style={{
//                   color: canResend ? "#339e35" : "#8c8b8b",
//                   cursor: canResend ? "pointer" : "not-allowed",
//                 }}
//                 onClick={() => {
//                   if (canResend) {
//                     setTimer(60);
//                     setCanResend(false);
//                     if (intervalRef.current) clearInterval(intervalRef.current);
//                     intervalRef.current = setInterval(() => {
//                       setTimer((prev) => {
//                         if (prev <= 1) {
//                           clearInterval(intervalRef.current);
//                           setCanResend(true);
//                           return 0;
//                         }
//                         return prev - 1;
//                       });
//                     }, 1000);
//                     // Future: Call resend API here
//                   }
//                 }}
//               >
//                 Resend ({timer}s)
//               </span>
//             </div>
//           </form>
//         </Form>
//       </Verify_container>
//     </Verify_content>
//   );
// };

// export default Verify;

// const Verify_content = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 9999;
//   position: fixed;
//   top: 0;
//   left: 0;
// `;

// const Verify_container = styled.div`
//   width: 33%;
//   height: 55%;
//   background-color: white;
//   border-radius: 1rem;
// `;

// const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   .form_wrapper {
//     width: 80%;
//     height: 75%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1.2rem;

//     .icon {
//       position: absolute;
//       top: 1rem;
//       right: 1rem;
//       width: 100%;
//       height: 8%;
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       font-size: 1.5rem;
//     }

//     h1 {
//       text-align: center;
//     }

//     .small_sign {
//       text-align: center;
//       font-size: 14px;
//       color: #8c8b8b;
//     }

//     .input_block {
//       display: flex;
//       width: 100%;
//       height: 20%;
//       gap: 1rem;

//       Input {
//         width: 100%;
//         height: 100%;
//         border: none;
//         outline: none;
//         font-size: 25px;
//         background-color: #f2e8e8;
//         padding-left: 50%;
//         border-radius: 1rem;
//       }
//     }
//     .btn {
//       width: 21rem;
//       height: 2.5rem;
//       border-radius: 0.5rem;
//       border: none;
//       outline: none;
//       color: white;
//       background-color: #339e35;
//       &:hover {
//         cursor: pointer;
//         background-color: #9a5912;
//         transition: all 0.5s ease-in-out;
//       }
//     }
//     .have {
//       width: 100%;
//       height: 10%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 14px;
//       color: #8c8b8b;
//       gap: 0.3rem;

//       span {
//         color: #339e35;
//         cursor: pointer;
//       }
//     }
//   }
// `;
