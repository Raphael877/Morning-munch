import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import Button from "../Button";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      toast.error("Email is required");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
      toast.error("Invalid email format");
      return;
    }
    toast.success("Subscription Successful");
    // Simulate sending email (replace with backend API call)
    setTimeout(() => {
      // Simulate email sent
      // e.g. sendSubscriptionEmail(trimmedEmail)
    }, 500);
    setEmail("");
  };

  return (
    <Footer_content>
      <Footer_wrapper>
        <Top>
          <div className="first">
            <p className="morning">Morning Munch</p>
            <p className="fresh">
              Fresh mornings, made
              <br /> simple.
            </p>
            <div className="icons">
              <FaFacebookF style={{ cursor: "pointer" }} />
              <TbBrandInstagramFilled style={{ cursor: "pointer" }} />
              <FaTwitter style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="second">
            <p>Contact Us</p>
            <p className="brandemail">hello@morningmunch.com</p>
            <p>+234 9012 345 678</p>
          </div>
          <div className="third">
            <ul>
              <li className="bold">Quick Links</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="fourth">
            <h3>Stay in the Loop</h3>
            <p>
              Don't miss out on fresh updates,
              <br /> partners offers, and new breakfast
              <br /> spots.
            </p>
            <div className="form">
              <input
                type="email"
                className="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="button"
                text="Subscribe"
                className="btn"
                onClick={handleSubscribe}
              />
            </div>
          </div>
        </Top>
        <hr />
        <Bottom>
          <div className="copy">
            &copy; 2025 Morning Munch | All Rights Reserved
          </div>
        </Bottom>
      </Footer_wrapper>
    </Footer_content>
  );
};

export default Footer;

const Footer_content = styled.div`
  font-family: sans-serif;
  background-color: #191919;
  color: white;
  width: 100%;
  height: 78vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    }
    @media (max-width: 480px) {
      height: auto;
    }
`;

const Footer_wrapper = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 95%;
    }
    @media (max-width: 480px) {
      width: 95%;
    }

  hr {
    width: 90%;
    border: none;
    border-bottom: 1px solid lightgray;
    margin-bottom: 3rem;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  gap: 5rem;
  padding-top: 0.5rem;
  justify-content: space-between;

  .first {
    display: flex;
    flex-direction: column;
    width: 22%;
    height: 100%;
    gap: 1.8rem;

    .morning {
      font-size: 1.35rem;
      font-weight: 800;
      color: #339e35;
    }

    .icons {
      display: flex;
      gap: 1rem;
      font-size: 18px;
      padding-top: 1rem;
      padding-left: 0.5rem;
    }
  }
  .second {
    display: flex;
    flex-direction: column;
    width: 22%;
    height: 100%;
    gap: 1.8rem;

    .brandemail {
      color: #d9d0d0f1;
    }
  }
  .third {
    display: flex;
    width: 15%;
    height: 100%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      width: 100%;
      height: 100%;
      list-style-type: none;

      .bold {
        font-size: 16px;
        color: white;
        padding-bottom: 0.7rem;
        &:hover {
          text-decoration: none;
          cursor: auto;
        }
      }

      li {
        cursor: pointer;
        color: #d9d0d0f1;
        font-size: 14px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .fourth {
    display: flex;
    width: 35%;
    height: 100%;
    flex-direction: column;
    gap: 1.2rem;

    p {
      line-height: 25px;
    }
    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      .email {
        width: 95%;
        height: 2.4rem;
        border-radius: 0.3rem;
        border: none;
        padding-left: 1rem;
        outline: none;
      }
      .btn {
        width: 40%;
        height: 2.4rem;
        border: none;
        border-radius: 0.3rem;
        color: white;
        cursor: pointer;
        background-color: #fd9f28;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
      padding-top: 2rem;
      gap: 2rem;

      .first{
        width: 45%;
        gap: 0.5rem;
      }

      .second{
        width: 45%;
        gap: 0.5rem;
      }

      .third{
        width: 45%;

        ul{
          gap: 0.5rem;
        }
      }

      .fourth{
        width: 45%;

        .form{
          margin-block: 1rem;
        }
      }
    }
    @media (max-width: 480px) {
      flex-direction: column;
      padding-top: 2rem;
      gap: 2rem;

      .first{
        width: 100%;
        gap: 0.5rem;
      }

      .second{
        width: 100%;
        gap: 0.5rem;
      }

      .third{
        width: 100%;

        ul{
          gap: 0.5rem;
        }
      }

      .fourth{
        width: 90%;

        .form{
          margin-block: 1rem;
        }
      }
    }
`;

const Bottom = styled.div`

@media (max-width: 768px) {
    margin-bottom: 1rem;
    }
    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }`;
