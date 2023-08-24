import FlexWrapper from "../components/main/FlexWrapper"
import styled from "styled-components";

function About() {
  return (
    <div>
        <FlexWrapper></FlexWrapper>
      <h1 className="primary-colour">About me:</h1>
      <p className="color-white">
        Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI
        designer, and Mobile developer. I jhave honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </p>
      <h1 className="primary-colour">5+</h1>
      <p className="color-white">
        Years of experience. Specialised in building apps, while ensuring a
        seamless web experience for end users.
      </p>
      <FlexWrapper align={"center"} justify={"center"}>
        <SkillsBoxPrimary >UI & UX DESIGNING</SkillsBoxPrimary>
        <SkillsBox>WEB DEVELOPMENT</SkillsBox>
        <SkillsBox>MOBILE DEVELOPMENT</SkillsBox>
        <SkillsBox>WEB SCRAPING WITH PYTHON</SkillsBox>
      </FlexWrapper>
    </div>
  );
}
const DivBox = styled.div`
    display : flex
`

const SkillsBox = styled.div`
  width: 256px;
  height: 254px;
  flex-shrink: 0;
  background: #bdbdbd;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillsBoxPrimary = styled.div`
  width: 256px;
  height: 254px;
  flex-shrink: 0;
  background: #7562E0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default About;
