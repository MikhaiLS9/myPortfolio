import styled from "styled-components";
import photo from "../components/main/photo.png";
import Container from "../components/container/Container";
import Theme from "../../styles/Theme";
import User from "../components/icon_svg/vuesax/bold/user.svg";
import Eye from "../components/icon_svg/vuesax/bold/eye.svg";
import SectionHeader from "../../styles/SectionHeader";
import Text from "../../styles/SectionText";

function Main() {
  return (
    <Home>
      <Container>
        <StyledMain>
          <About>
            <SectionHeader>Hello, i’m</SectionHeader>
            <MyName>Jayjay D. Dinero</MyName>
            <Text>
              Freelance UI designer, Fullstack developer, & Data Miner. I create
              seamless web experiences for end-users.
            </Text>
            <StyleLink>
              <Link>
                About me <img src={User} alt="User" />
              </Link>
              <Link>
                Projects <img src={Eye} alt="User" />
              </Link>
            </StyleLink>
          </About>
          <Circle>
            <MyPhoto src={photo} alt="myphoto" />
          </Circle>
        </StyledMain>
        <Line />
      </Container>
    </Home>
  );
}
const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
  @media (max-width: 360px) {
    flex-wrap: wrap;
    padding: 10px;
  }
`;
const MyName = styled.h1`
  font-weight: 600;
  font-size: 52px;

  @media (max-width: 850px) {
    font-size: 32px;
  }
`;

const Home = styled.section`
  dispay: flex;
  color: ${Theme.color.fonst};
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    align-items: center;
  }
`;

const StyleLink = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 360px) {
    max-width: 316px;
    max-height: 70px;
    padding: 5px 14px;
    justify-content: flex-end;
  }
`;

const MyPhoto = styled.img`
  width: 444px;
  height: 430px;
  flex-shrink: 0;
  align-items: baseline;
  display: flex;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    max-width: 300px;
    max-height: 300px;
  }
`;
const Link = styled.a`
  :first-child {
    display: inline-flex;
    padding: 12px 25px;
    align-items: flex-start;
    align-items: center;
    gap: 5px;

    border-radius: 8px;
    background: ${Theme.color.accent};
  }
  display: inline-flex;
  padding: 12px 25px;
  align-items: flex-start;
  align-items: center;
  gap: 5px;

  border: solid ${Theme.color.accent};
  border-radius: 8px;
  font-size: 16px;
`;

const Circle = styled.div`
  width: 486px;
  height: 430px;
  border-radius: 100%;
  background: ${Theme.color.accent};

  @media (max-width: 450px) {
    flex-wrap: wrap;
    max-width: 300px;
    max-height: 300px;
  }
`;

const Line = styled.div`
  background: #181824;
  min-height: 128px;
  max-width: 100%;
  margin: 0 auto;
`;
export default Main;
