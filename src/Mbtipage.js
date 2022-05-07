import React from "react";
import "./App.css";
import styled from "styled-components";

const Title = styled.div`
  &:hover {
    color: rgb(225, 0, 0);
  }
  font-family: "BMEuljirooraeorae";
  font-size: 99px;
  color: rgb(0, 0, 0);
  background-color: black;
`;

const Intp = styled.div`
  &:hover {
    font-size: 16px;
  }
  font-family: "HSGyeoulNoonkott20";
  font-size: 1px;
  color: rgb(255, 0, 0);
`;
const Intj = styled.div`
  /* &:hover {
    font-size: 1px;
  } */
  font-family: "KOHIBaeumOTF";
  color: darkred;
  font-size: 9.9px;
`;

const Enfp = styled.div`
  &:hover {
    text-shadow: 0 0 0.5em, 0 0 0.7em rgb(255, 0, 0);
    color: rgb(255, 0, 0);
  }
  font-family: "Vitro_core";
  color: darkred;
  font-size: 101px;
`;
const Istj = styled.div`
  &:hover {
    color: #fff;
  }
  color: rgb(255, 0, 0);
  font-size: 1px;
  font-family: "HSGyeoulNoonkott20";
`;

const Estj = styled.div`
  font-family: "GyeonggiBatang";
  color: #ffbfaa;
`;
const Entj = styled.div`
  &:hover {
    font-size: 850px;
  }
  color: rgb(255, 0, 0);
  font-family: "SSVeryBadHandwriting";
`;

const Esfj = styled.div`
  &:hover {
    text-shadow: 4px 4px 0px #ab0800, 8px 8px 0px #c30900, 12px 12px 0px #d40a00;
  }
  font-family: "Arial Black", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: darkred;
`;

const Entp = styled.div`
  font-family: "HSGyoulnoonkot";
  color: red;
`;

const Esfp = styled.div`
  &:hover {
    text-shadow: 700px 2px 2px darkred;
    color: rgb(255, 0, 0);
  }
  font-family: "SSFaithfulnessOTF";
  font-size: 100px;
  font-weight: bold;
  color: #fff;
`;
const Istp = styled.div`
  &:hover {
    color: darkred;
  }
  color: white;
  font-family: "-KITA-Regular";
`;

const Enfj = styled.div`
  &:hover {
    text-shadow: 4px 4px 0px #610400, 8px 8px 0px #490300, 12px 12px 0px #280200;
  }
  font-family: "Arial Black", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: darkred;
`;

const Estp = styled.div`
  &:hover {
    color: #ff0000;
    font-size: 9999999999px;
    text-shadow: 0 0 0.5em, 0 0 0.7em rgb(255, 0, 0);
  }
  font-family: "YdestreetB";
  color: #52170b;
`;

function Mbtipage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Title>-- .. ... --- / .... --- -. --.</Title>
      <Intp>INTP : 미소, 모범생1,달님</Intp>
      <Intj>INTJ : 각별님</Intj>
      <Enfp>
        Enfp: 망고언니,유나언니,과외쌤1,똑똑한 트러블메이커1, 우리 반 씹인싸
      </Enfp>
      <Istj> Istj:아빠,나에언니,물솜님,라더님</Istj>
      <Estj> Estj:규리언니 어머님 </Estj>
      <Entj> Entj : 뜰님,다깐다,심상정,룡님</Entj>

      <div
        class="txt"
        style={{ fontFamily: "SangSangYoungestDaughter", color: "red" }}
      >
        <span>인</span>
        <span>프</span>
        <span>피</span>
        <span>:</span>
        <span>은</span>
        <span>하</span>
        <span>언</span>
        <span>니</span>
        <span>,</span>
        <span>댄</span>
        <span>싱</span>
        <span>주</span>
        <span>은</span>
        <span>,</span>
        <span>규</span>
        <span>동</span>
      </div>

      <Esfj> Esfj : 엄마</Esfj>
      <div>
        <h1
          style={{
            color: "black",
            fontFamily: "SangSangYoungestDaughter",
          }}
        >
          INFJ:지나가던 사람언니
        </h1>
      </div>

      <Entp> Entp : 금손 영진</Entp>
      <Esfp> Esfp : 사촌 언니</Esfp>
      <Istp> Istp : 과거의 쌤, 애드머</Istp>
      <div class="txt_animate">
        <span>잇</span>
        <span>프</span>
        <span>피</span>
        <span>:</span>
        <span>공</span>
        <span>공</span>
        <span>이</span>
      </div>

      <div class="txt">
        <span style={{ color: "red" }}> I</span>
        <span style={{ color: "orange" }}>S</span>
        <span style={{ color: "gold" }}>F</span>
        <span style={{ color: "green" }}>J</span>
        <span style={{ color: "blue" }}>:</span>
        <span style={{ color: "purple" }}>과</span>
        <span style={{ color: "transparent" }}>외</span>
        <span style={{ color: "red" }}>쌤</span>
      </div>
      <Estp> Estp : 현재의 쌤,덕개님</Estp>
      <Enfj> Enfj : 규리언니, 친구1, 윤석열</Enfj>
    </div>
  );
}

export default Mbtipage;
