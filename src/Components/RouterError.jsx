import React from "react";
import styled from "styled-components";

const RouterError = () => {
  return (
    <Error>
      <div><h1>404 page not found</h1></div>
    </Error>
  );
};

export default RouterError;

const Error = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
