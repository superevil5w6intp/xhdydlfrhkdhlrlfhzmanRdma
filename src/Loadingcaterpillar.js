import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
`;

const loading = keyframes`
    0% {
        opacity :0;
        transform:scale(0.5);
    }
    50% {
        opacity : 1;
        transform : scale(1);
    }
    100%{
        opacity : 0;
        transform:scale(0.5);
    }
`;

const Loading = styled.div`
  /* background-color: white; */
  /* position:relative; */

  > span {
    /* position : absolute */
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
    width: 400px;
    height: 400px;
    background-color: lightgreen;
    display: inline-block;
    animation: ${loading} 1s linear infinite;
    :nth-child(1) {
      background-color: red;
      animation-delay: 0.1s;
    }
    :nth-child(2) {
      background-color: yellow;
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.3s;
    }

    @media only screen and (max-width: 1230px) {
      width: 300px;
      height: 300px;
    }
    @media only screen and (max-width: 930px) {
      width: 200px;
      height: 200px;
    }
    @media only screen and (max-width: 630px) {
      width: 100px;
      height: 100px;
    }
  }
`;

function Loadingcaterpillar() {
  return (
    <Container>
      <Loading>
        <span> </span>
        <span> </span>
        <span></span>
      </Loading>
    </Container>
  );
}

export default Loadingcaterpillar;
