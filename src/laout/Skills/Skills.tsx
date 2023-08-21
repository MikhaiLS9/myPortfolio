import styled from "styled-components";
function Skills() {
  return (
    <SkillsBox>
      <SkillsBoxPrimary>
        <h1>UI & UX DESIGNING</h1>
        <p>I design beautiful web iterfaces with Figma and Adove XD</p>
      </SkillsBoxPrimary>
      <SkillsBoxWhite>
        <h1>WEB DEVELOPMENT</h1>
        <p>
          I create beautiful iterfaces with simple HTML, CSS, & JavaScript and
          also frameworks like Angular and ReactJS
        </p>
      </SkillsBoxWhite>
      <SkillsBoxPrimary>
        <h1>MOBILE DEVELOPMENT</h1>
        <p>
          I am an expert mobile developer. I have experience using Flutter and
          React Native.
        </p>
      </SkillsBoxPrimary>
      <SkillsBoxWhite>
        <h1>VERSION CONTROL</h1>
        <p>
          I can use version control systems well, and Git & Mecurial are my
          go-to tool.
        </p>
      </SkillsBoxWhite>
      <SkillsBoxPrimary>
        <h1>NPM AND NODEJS</h1>
        <p>
          I have core understanding of NPM. I can also develop general purpose
          applications with NodeJS
        </p>
      </SkillsBoxPrimary>
      <SkillsBoxWhite>
        <h1>WEB SCRAPING</h1>
        <p>
          I can collect content and data from the internet then manipulate and
          analyze as needed.
        </p>
      </SkillsBoxWhite>
    </SkillsBox>
  );
}

const SkillsBoxPrimary = styled.div`
border: 3px solid  #7562E0

`
const SkillsBoxWhite = styled.div`
border: 3px solid  white


`
const SkillsBox = styled.div`

`
export default Skills;
