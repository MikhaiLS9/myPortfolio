import styled from "styled-components";
import Icon from "../../components/icon/Icon";

// type SkillBoxPropsType = {
//   iconId: string;
//   titel: string;
//   text: string;
// };

function SkillBox() {
  return (
    // <BoxStyle>
    //   <Icon iconId={props.iconId} />
    //   <TitleStyle>{props.titel}</TitleStyle>
    //   <Text>{props.text}</Text>
    // </BoxStyle>

    <GridConteiner>
      <GridItems>
        <Icon iconId={"pen"} />
        <TitleStyle>UI & UX DESIGNING</TitleStyle>
        <Text>I design beautiful web iterfaces with Figma and Adove XD</Text>
      </GridItems>
      <GridItems>
        <Icon iconId={"code"} />
        <TitleStyle>WEB DEVELOPMENT</TitleStyle>
        <Text>
          I create beautiful iterfaces with simple HTML, CSS, & JavaScript and
          also frameworks like Angular and ReactJS
        </Text>
      </GridItems>
      <GridItems>
        <Icon iconId={"android"} />
        <TitleStyle>MOBILE DEVELOPMENT</TitleStyle>
        <Text>
          I am an expert mobile developer. I have experience using Flutter and
          React Native.
        </Text>
      </GridItems>
      <GridItems>
        <Icon iconId={"git-repo"} />
        <TitleStyle>VERSION CONTROL</TitleStyle>
        <Text>
          I can use version control systems well, and Git & Mecurial are my
          go-to tool.
        </Text>
      </GridItems>
      <GridItems>
        <Icon iconId={"javaScript"} />
        <TitleStyle>NPM AND NODEJS</TitleStyle>
        <Text>
          I have core understanding of NPM. I can also develop general purpose
          applications with NodeJS
        </Text>
      </GridItems>
      <GridItems>
        <Icon iconId={"slider"} />
        <TitleStyle>WEB SCRAPING</TitleStyle>
        <Text>
          I can collect content and data from the internet then manipulate and
          analyze as needed.
        </Text>
      </GridItems>
    </GridConteiner>
  );
}

const GridConteiner = styled.div`
height: 100vh;
display: grid;
grid-template-columns: 341px 341px 341px;
grid-template-rows repeat(2,338px);
justify-content: center;
gap: 20px;
`;
const GridItems = styled.div`
  background: #1a1a29;
  border: 3px solid #7562e0;
`;

// const BoxStyle = styled.div`
//   border-radius: 16px;
//   border: 3px solid var(--primary-colour, #7562e0);
//   width: 339px;
//   height: 338px;
//   margin: 10px;
// `;
const TitleStyle = styled.h2``;
const Text = styled.p``;
export default SkillBox;
