import styled from "styled-components";
import SkillBox from "./skillsBox/SkillsBox";
import Container from "../components/container/Container";
import SectionHeader from "../../styles/SectionHeader";
import Theme from "../../styles/Theme";

function Skills() {
  return (
    <Container>
      <SkillsStyle id ="project">
        <SectionHeader>The services i offer:</SectionHeader>
        <SkillBox></SkillBox>
      </SkillsStyle>
    </Container>
  );
}
const SkillsStyle = styled.section`
  h2:first-child {
    color: ${Theme.color.accent};
  }
`;

export default Skills;
