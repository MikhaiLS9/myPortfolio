import FlexWrapper from "../components/main/FlexWrapper";
import styled from "styled-components";
import SkillsBox from "./skillBox/SkillBox";
function About() {
  return (
    <SectionAbout>
      <SectionTitel className="primary-colour">About me:</SectionTitel>
      <SectionText className="color-white">
        Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI
        designer, and Mobile developer. I jhave honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </SectionText>
      <SectionTitel className="primary-colour">5+</SectionTitel>
      <SectionText className="color-white">Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.</SectionText>
      <FlexWrapper justify="center">
        <SkillsBox iconId="pen" title="UI & UX DESIGNING"/>
        <SkillsBox iconId="code" title="WEB DEVELOPMENT"/>
        <SkillsBox iconId="android" title="MOBILE DEVELOPMENT"/>
        <SkillsBox iconId="python"  title="WEB SCRAPING WITH PYTHON"/>
      </FlexWrapper>
    </SectionAbout>
  
  );
}

const SectionAbout = styled.section`
  min-hight: 100wh;
`;
const SectionTitel = styled.h2``;
const SectionText = styled.p``;

export default About;
