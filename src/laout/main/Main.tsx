import styled from "styled-components";
import photo from "../components/main/photo.png";
import FlexWrapper from "../components/main/FlexWrapper";

function Main() {
  return (
    <Home>
      <FlexWrapper align={"center"} justify={"center"}>
        <About>
          <h2>Hello, i’m</h2>
          <h1>Jayjay D. Dinero</h1>
          <AboutMe>
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </AboutMe>
          <StyleLink>
          <Link>About me</Link>
          <Link>Projects</Link>
          </StyleLink>
        </About>
        <Circle>
          <MyPhoto src={photo} alt="myphoto" />
        </Circle>
      </FlexWrapper>
      <Line />
    </Home>
  );
}
const Home = styled.section`
  background-color: #dcdcdc;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMe = styled.p``;

const StyleLink = styled.div`
display: flex;
gap: 20px;
`

const MyPhoto = styled.img`
  width: 444px;
  height: 430px;
  flex-shrink: 0;
  align-items: baseline;
  display: flex;
`;
const Link = styled.a`
  border: solid;
  border-radius: 10px;
  max-width: 100px;
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
  min-height: 128px;
`;
export default Main;
