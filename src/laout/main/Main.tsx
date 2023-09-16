import styled from "styled-components";
import photo from "../components/main/photo.png";
import FlexWrapper from "../components/main/FlexWrapper";
import Container from "../components/container/Container";
import Theme from "../../styles/Theme";
import User from '../components/image/vuesax/bold/vuesax/bold/user.svg'
import Eye from '../components/image/vuesax/bold/vuesax/bold/eye.svg'
import SectionHeader from "../../styles/SectionHeader";
import Text from "../../styles/SectionText";

function Main() {
  return (
    <Home>
      <Container>
      <FlexWrapper align={"center"} justify={"center"}>
        <About>
          <SectionHeader>Hello, i’m</SectionHeader>
          <MyName>Jayjay D. Dinero</MyName>
          <Text>
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </Text>
          <StyleLink>
          <LinkA>About me <img src={User} alt="User" /></LinkA>
          <LinkB>Projects <img src={Eye} alt="User" /></LinkB>
          </StyleLink>
        </About>
        <Circle>
          <MyPhoto src={photo} alt="myphoto" />
        </Circle>
      </FlexWrapper>
      <Line />
      </Container>
     
      
    </Home>
  );
}

const MyName = styled.h1`
font-weight: 600;
font-size: 52px;
`

const Home = styled.section`
  dispay: flex;
  color: ${Theme.color.fonst};
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
`;

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
const LinkA = styled.a`
  border-radius: 10px;
  max-width: 100px;
  background: ${Theme.color.accent};
`;

const LinkB = styled.a`
  border: solid ${Theme.color.accent};
  border-radius: 10px;
  max-width: 100px;
  font-size: 16px;
`;

const Circle = styled.div`
  width: 486px;
  height: 430px;
  border-radius: 486px;
  background: ${Theme.color.accent};
`;

const Line = styled.div`
  background: #181824;
  min-height: 128px;
  max-width: 100%;
  margin: 0 auto;
`;
export default Main;
