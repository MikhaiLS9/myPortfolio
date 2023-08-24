import styled from "styled-components";
import photo from "../components/main/photo.png";
import FlexWrapper from "../components/main/FlexWrapper";

function Main() {
  return (
    <Home>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <About>
          <h2 className="color-white">Hello, i’m</h2>
          <h1 className="color-white">Jayjay D. Dinero</h1>
          <AboutMe className="color-white">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </AboutMe>
          <LeftBtn className="color-white">About me</LeftBtn>
          <RigthtBtn className="color-white">Projects</RigthtBtn>
        </About>

        <Circle>
          <MyPhoto src={photo} alt="myphoto" />
        </Circle>
      </FlexWrapper>
      <Line></Line>
    </Home>
  );
}
const Home = styled.div``;

const About = styled.div`
  width: 340px;
  height: 272px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
`;

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
  width: 100px;
  align-items: center;
  justify-content: center;
`;
const RigthtBtn = styled.button`
  border-color: #7562e0;
  border-radius: 8px;
  background: #1a1a29;
  display: inline-flex;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 486px;
  height: 430px;
  border-radius: 486px;
  background: #7562e0;
  position: "relative";
`;

const Line = styled.div`
  background: #181824;
  width: 100vw;
  height: 128px;
  flex-shrink: 0;
`;
export default Main;
