
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SecondHeader from "../Components/SecondHeader";
import WebApp_image from "../Assets/webapp_image.png";
import caro5 from "../Assets/caro5.png";
import caro7 from "../Assets/caro7.png";
import caro4 from "../Assets/caro4.png";
import caro2 from "../Assets/caro2.png";
import caro3 from "../Assets/caro3.jpeg";
import caro6 from "../Assets/caro6.png";
import { TbMessageCircleFilled } from "react-icons/tb";
import Footer from "../Components/Footer";

const WebApp = () => {
  const navigate = useNavigate();
  const Card = [
    { id: 1, image: caro7, name: "CitySubs", location: "Apapa" },
    { id: 2, image: caro5, name: "Lagos Breakfast Club", location: "Wilmer" },
    { id: 3, image: caro4, name: "So Fresh", location: "Cardoso" },
    { id: 4, image: caro3, name: "Nuli", location: "Coconut" },
    { id: 5, image: caro2, name: "Akara & Co", location: "Tolu" },
    { id: 6, image: caro6, name: "Mr Eats", location: "Boundary" },
  ];

  const Secondcard = [
    {
      question: "How do i know there is a delivery service in my city?",
      ans: "Ordering breakfast to be delivered to your home or office has never been easier. You can download our app or visit our website to check if we operate in your area. To find out if your breakfast option is available, enter the app, input your email and set your location on the map.",
    },
    {
      question: "Does M&M offer any kind of promotions?",
      ans: "Yes, we have a variety of promotions available from time to time. Be sure to check the app or our website for the latest deals and offers.",
    },
    {
      question: "How do i know if a restaurant is open?",
      ans: "You can check the operating hours of each restaurant in the app. We also provide real-time updates on restaurant availability.",
    },
    {
      question: "Is same day breakfast delivery available?",
      ans: "Yes, we offer same-day breakfast delivery in select areas. Please check the app for availability in your location.",
    },
    {
      question: "How long does M&M deliver breakfast?",
      ans: "Delivery times may vary depending on your location and the restaurant's operating hours. Generally, you can expect your breakfast to arrive within 30-60 minutes after placing your order.",
    },
    {
      question: "Does M&M deliver special order?",
      ans: "Yes, we can accommodate special orders in most cases. Please contact our customer support for assistance with your specific request.",
    },
    {
      question: "What is the cost of breakfast delivery?",
      ans: "Delivery fees may vary depending on your location and the restaurant you order from. You can view the delivery cost in the app before placing your order.",
    },
    {
      question: "Can i place orders anytime in Nigeria?",
      ans: "Yes, we have a variety of promotions available from time to time. Be sure to check the app or our website for the latest deals and offers.",
    },
    {
      question: "What if the restaurant doesn't have my order?",
      ans: "If a particular retaurant do not have what you want, you can choose another establishment, we can accommodate special orders in most cases. Please contact our customer support for assistance with your specific request.",
    },
  ];
  return (
    <WebApp_content>
      <WebApp_wrapper>
        <SecondHeader />
        <WebApp_background>
          <h1>
            Start your day with a breakfast that's made with love<br></br> and
            delivered with precision
          </h1>
        </WebApp_background>
        <Restaurants>
          <Restaurant_wrapper>
            <h3>Restaurants</h3>
            <div className="restaurants_wrapper">
              {Card.map((card) => {
                let route = "";
                if (card.id === 1) {
                  route = "/citysubs";
                } else if (card.id === 2) {
                  route = "/lbc";
                } else if (card.id === 3) {
                  route = "/sofresh";
                } else if (card.id === 4) {
                  route = "/nuli";
                } else if (card.id === 5) {
                  route = "/akara";
                } else if (card.id === 6) {
                  route = "/mreats";
                }
                return (
                  <div
                    className="restaurant_card"
                    key={card.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => route && navigate(route)}
                  >
                    <img src={card.image} />
                    <div className="restaurant_logo"></div>
                    <h3 className="restaurant_name">{card.name}</h3>
                    <p>{card.location}</p>
                  </div>
                );
              })}
            </div>
          </Restaurant_wrapper>
        </Restaurants>
        <Faq>
          <Faq_wrapper>
            <Top>
              <div className="left">
                <TbMessageCircleFilled
                  style={{ fontSize: "1.5rem", color: "white" }}
                />
              </div>
              <h3>FAQs about breakfast delivery</h3>
            </Top>
            <Bottom>
              <div className="bottom_wrapper">
                {Secondcard.map((card, idx) => (
                  <div className="bottom_card" key={idx}>
                    <div className="bottom_card_wrapper">
                      <h3>{card.question}</h3>
                      <p>{card.ans}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Bottom>
          </Faq_wrapper>
        </Faq>
        <Footer />
      </WebApp_wrapper>
    </WebApp_content>
  );
};

export default WebApp;

const WebApp_content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WebApp_wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const WebApp_background = styled.div`
  width: 100%;
  height: 50vh;
  background: linear-gradient(
      to bottom,
      rgba(14, 14, 14, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${WebApp_image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "roboto", sans-serif;

  h1 {
    width: 80%;
    font-size: 2.3rem;
    line-height: 3rem;
  }
`;

const Restaurants = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Restaurant_wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-block: 1.4rem;
  }

  .restaurants_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    .restaurant_card {
      width: 32%;
      height: 50%;
      display: flex;
      flex-direction: column;
      border: 0.2px solid lightgray;
      border-radius: 0.5rem;
      cursor: pointer;
      position: relative;

      .restaurant_logo{
        position: absolute;
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 50%;
        background-image: url(${WebApp_image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        top: 63%;
        right: 7%;
      }

      img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        border-radius: 0.5rem;
      }
      .restaurant_name {
        margin-left: 0.5rem;
      }
      p {
        margin-left: 0.5rem;
      }
    }
  }

  
`;

const Faq = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
`;

const Faq_wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #339e35;
  }

  h3 {
    font-size: 1.4rem;
  }
`;
const Bottom = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;

  .bottom_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    .bottom_card {
      width: 48.5%;
      height: 42vh;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1.4px solid lightgray;
      border-radius: 0.5rem;

      .bottom_card_wrapper {
        width: 95%;
        height: 90%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h3 {
          font-size: 1.35rem;
        }
        p {
          line-height: 1.5rem;
        }
      }
    }
  }
`;
