import FlexWrapper from "../components/main/FlexWrapper";
import styled from "styled-components";
import SkillsBox from "./skillBox/SkillBox";
import Container from "../components/container/Container";
import Theme from "../../styles/Theme";
import SectionHeader from "../../styles/SectionHeader";
import Text from "../../styles/SectionText";

function About() {
  return (
    <SectionAbout>
      <Container>
      <SectionHeader>About me:</SectionHeader>
      <Text >
        Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI
        designer, and Mobile developer. I jhave honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </Text>
      <FlexWrapper align="center">
      <SectionTitel>5+</SectionTitel>
      <Text>Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.</Text>
      </FlexWrapper>
     
      <FlexWrapper wrap="wrap" justify="space-around">
        <SkillsBox iconId= "pen" title="UI & UX DESIGNING"/>
        <SkillsBox iconId="code" title="WEB DEVELOPMENT"/>
        <SkillsBox iconId="android" title="MOBILE DEVELOPMENT"/>
        <SkillsBox iconId="python"  title="WEB SCRAPING WITH PYTHON"/>
      </FlexWrapper>
      </Container>
     
    </SectionAbout>
  
  );
}

const SectionAbout = styled.section`
h2{
  color: ${Theme.color.accent};
}

  min-hight: 100wh;
`;
const SectionTitel = styled.h2`
font-size: 96px;
font-weight: 600;
display: inline-block;
margin: 0px;

@media (max-width: 726px)
{
    font-size: 60px;
}
`;

// const StyleText = styled.p`
// display: inline-block;
// font-size: 24px;
// font-weight: 500;
// `
export default About;
