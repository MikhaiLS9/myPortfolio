import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import Sms from "../../components/image/vuesax/outline/vuesax/outline/ruler&pen.svg";
import Theme from "../../../styles/Theme";

function SkillBox() {
  return (
    <GridConteiner>
      <GridItems>
        <img src={Sms} alt="ss" />
        {/* <Icon iconId={"pen"} /> */}
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
div:nth-child(odd){
  border: 3px solid ${Theme.color.accent};
};
display: grid;
grid-template-columns: 341px 341px 341px;
grid-template-rows repeat(2,338px);
justify-content: center;
min-width: 1066px;
min-height: 692px;
gap: 17px;
`;
const GridItems = styled.div`
  background: ${Theme.color.primaryBg};
  border: 3px solid white;
  border-radius: 16px;
`;
const TitleStyle = styled.h2``;
const Text = styled.p``;

export default SkillBox;
