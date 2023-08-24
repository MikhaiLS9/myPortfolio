import styled from "styled-components";
import FlexWrapper from "../components/main/FlexWrapper"

function Skills() {
  return (
    <SkillsBox>
      <h1 className="primary-colour">The services i offer:</h1>
      <FlexWrapper justify={"center"}>
      <SkillsBoxPrimary>
        <h1 className="color-white">UI & UX DESIGNING</h1>
        <p>I design beautiful web iterfaces with Figma and Adove XD</p>
      </SkillsBoxPrimary>
      <SkillsBoxWhite>
        <h1 className="primary-colour">WEB DEVELOPMENT</h1>
        <p>
          I create beautiful iterfaces with simple HTML, CSS, & JavaScript and
          also frameworks like Angular and ReactJS
        </p>
      </SkillsBoxWhite>
      <SkillsBoxPrimary>
        <h1 className="color-white">MOBILE DEVELOPMENT</h1>
        <p>
          I am an expert mobile developer. I have experience using Flutter and
          React Native.
        </p>
      </SkillsBoxPrimary>
      <SkillsBoxWhite>
        <h1 className="primary-colour">VERSION CONTROL</h1>
        <p>
          I can use version control systems well, and Git & Mecurial are my
          go-to tool.
        </p>
      </SkillsBoxWhite>
      <SkillsBoxPrimary>
        <h1 className="color-white">NPM AND NODEJS</h1>
        <p>
          I have core understanding of NPM. I can also develop general purpose
          applications with NodeJS
        </p>
      </SkillsBoxPrimary>
      <SkillsBoxWhite>
        <h1 className="primary-colour">WEB SCRAPING</h1>
        <p>
          I can collect content and data from the internet then manipulate and
          analyze as needed.
        </p>
      </SkillsBoxWhite>
      </FlexWrapper>
      
    </SkillsBox>
  );
}

const SkillsBoxPrimary = styled.div`
width: 256px;
height: 254px;

background: #1A1A29;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
display: inline-block;
margin: 10px;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-content: center;
align-items: center;
border-radius: 16px;
border: 3px solid #7562E0;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);


}
`
const SkillsBoxWhite = styled.div`
width: 256px;
height: 254px;

background: #1A1A29;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
display: inline-block;
margin: 10px;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-content: center;
align-items: center;
border-radius: 16px;
border: 3px solid #F5F5F5;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);


`
const SkillsBox = styled.div`

`
export default Skills;
