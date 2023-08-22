import styled from "styled-components";
import photo from "../components/main/photo.png";
import FlexWrapper from "../components/main/FlexWrapper";
import React from "react";
function Main() {
  return (
    <Home>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <div>
          <h2 className="color-white">Hello, i’m</h2>
          <h1 className="color-white">Jayjay D. Dinero</h1>
          <AboutMe className="color-white">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </AboutMe>
          <LeftBtn className="color-white">About me</LeftBtn>
          <button>Projects</button>
        </div>

        <Circle>
          <MyPhoto src={photo} alt="myphoto" />
        </Circle>

        {/* <Line></Line> */}
      </FlexWrapper>
    </Home>
  );
}
const Home = styled.div``;

const AboutMe = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MyPhoto = styled.img`
  width: 444px;
  height: 430px;
  flex-shrink: 0;
  align-items: baseline;
  display: flex;
`;
const LeftBtn = styled.button`
  border-radius: 8px;
  background: #7562e0;
  display: inline-flex;
  gap: 30px;
`;

const Circle = styled.div`
  position: absolute
  width: 486px;
  height: 430px;;
  border-radius: 486px;
  background: #7562e0;
  position:'relative'
`;

const Line = styled.div`
  background: #181824;
  width: 100vw;
  height: 128px;
  flex-shrink: 0;
`;
export default Main;
