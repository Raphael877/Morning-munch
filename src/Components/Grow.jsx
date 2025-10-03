import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import grow1 from "../assets/grow1.jpg";
import why4 from "../assets/why4.jpg";
import grow3 from "../assets/grow3.jpg";

const Grow = () => {
  const Apply = [
    {
      img: grow1,
      title: "Become a Vendor",
      desc: "Bring your meals to more people and grow your business with Morning Bites.",
    },
    {
      img: why4,
      title: "Become a Rider",
      desc: "Earn more by delivering fresh breakfasts right on time every morning.",
    },
    {
      img: grow3,
      title: "Join Our Team",
      desc: "Passionate about building something great? Explore roles and be part of our story.",
    },
  ];
  return (
    <Grow_content>
      <Grow_wrapper>
        <h1>Grow With Morning Bites</h1>
        <p className="join">
          Join our mission to make mornings better, whether you cook, deliver,
          or want to be part of the team.
        </p>
        <div className="card_wrapper">
          {Apply.map((apply) => (
            <div className="card">
              <img src={apply.img} />
              <h3 className="become">{apply.title}</h3>
              <p>{apply.desc}</p>
              <Link to="/partner">
                <h3 className="apply">Apply here </h3>
              </Link>
            </div>
          ))}
        </div>
      </Grow_wrapper>
    </Grow_content>
  );
};

export default Grow;

const Grow_content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff5ea;

  @media (max-width: 768px) {
    height: 200vh;
    }
    @media (max-width: 480px) {
      height: 200vh;
    }
`;

const Grow_wrapper = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .join {
    padding-bottom: 2.5rem;
  }

  .card_wrapper {
    width: 100%;
    height: 74%;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1rem;

    .card {
      height: 100%;
      width: 33%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 100%;
        height: 60%;
        border-radius: 0.5rem;
      }

      .apply {
        cursor: pointer;
        color: #339e35;
      }
      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
      width: 85%;
      height: 80%;

      h1{
        text-align: center;
      }

      .join{
        text-align: center;
      }

      .card_wrapper{
        flex-direction: column;
        
        .card{
          width: 100%;
        }
      }
    }
    @media (max-width: 480px) {
      width: 95%;
      height: 100%;

      h1{
        text-align: center;
      }

      .join{
        text-align: center;
      }

      .card_wrapper{
        flex-direction: column;
        
        .card{
          width: 100%;
        }
      }
    }
`;
