import styled from "styled-components";
// import FlexWrapper from "../components/main/FlexWrapper";
import SkillBox from "./skillsBox/SkillsBox";

function Skills() {
  return (
   
    <SkillsStyle>
      <HeaderStyle className="primary-colour">
        The services i offer:
      </HeaderStyle>
      <SkillBox></SkillBox>
      {/* <FlexWrapper wrap="wrap" justify="center">
        <SkillBox
          iconId="pen"
          titel="UI & UX DESIGNING"
          text="I design beautiful web iterfaces with Figma and Adove XD"
        />
        <SkillBox
          iconId="code"
          titel="WEB DEVELOPMENT"
          text="I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS"
        />
        <SkillBox
          iconId="android"
          titel="MOBILE DEVELOPMENT"
          text="I am an expert mobile developer. I have experience using Flutter and React Native."
        />
        <SkillBox
          iconId="git-repo"
          titel="VERSION CONTROL"
          text="I can use version control systems well, and Git & Mecurial are my go-to tool."
        />
        <SkillBox
          iconId="javaScript"
          titel="NPM AND NODEJS"
          text="I have core understanding of NPM. I can also develop general purpose applications with NodeJS"
        />
        <SkillBox
          iconId="slider"
          titel="WEB SCRAPING"
          text="I can collect content and data from the internet then manipulate and analyze as needed."
        />
      </FlexWrapper> */}
    </SkillsStyle>
  );
}
const SkillsStyle = styled.section`
  min-height: 1000px;
`;
const HeaderStyle = styled.h2``;



export default Skills;