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
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
`;

const loading = keyframes`
0% { 
    top: 0;
    left: 0;
  }
25% { 
    top: 0;
    left: calc(100% - 200px);
 }
50% {
    top: calc(100% - 200px);
    left: calc(100% - 200px);
 }
75% { 
    top: calc(100% - 1200px);
    left: 0;
}
100% { 
    top: 0;
    left: 0;
    transform: rotate(360deg);
}
`;

const colorchange = keyframes` 
0% { 
  top : 0;
  left: 0;
    transform: rotate(360deg);
}
25% { 
  top : calc(100% - 1200px)
}
`;

const Loading = styled.div`
  background-color: white;
  width: 1916px;
  height: 961px;
  position: relative;
  > span {
    position: absolute;
    background-color: purple;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation ${colorchange} 1s linear infinite;
    :nth-child(1) {
      animation-delay: 0.4s;
      background-color: darkred;
      width: 900px;
      height: 1px;
    }
    :nth-child(2) {
      animation-delay: 0.5s;
      background-color: orange;
      width: 1px;
      height: 900px;
    }
    :nth-child(3) {
      animation-delay: 0.6s;
      background-color: yellow;
      width: 500px;
      height: 1px;
    }
    :nth-child(4) {
      animation-delay: 0.7s;
      background-color: green;

      width: 1px;
      height: 500px;
    }
    :nth-child(5) {
      animation-delay: 0.8s;
      background-color: blue;
      width: 1px;
      height: 1px;
    }
    :nth-child(6) {
      animation-delay: 0.9s;
      background-color: purple;
      width: 500px;
      height: 500px;
    }
    :nth-child(7) {
      animation-delay: 10s;
      background-color: black;
      width: 500px;
      height: 500px;
      border-radius: 0%;
      animation ${colorchange} 1s linear infinite;
    }
    :nth-child(8) {
      animation-delay: 0.1s;
      background-color: white;

      border-radius: 0%;
    }
  }
`;

function LoadingNrmrSrmr() {
  return (
    <Container>
      <Loading>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Loading>
    </Container>
  );
}

export default LoadingNrmrSrmr;
