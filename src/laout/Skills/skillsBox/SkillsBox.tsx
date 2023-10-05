import styled from "styled-components";

import Pen from "../../components/icon_svg/vuesax/ruler&pen.svg";
import Code from "../../components/icon_svg/vuesax/code.svg";
import Android from "../../components/icon_svg/vuesax/android.svg";
import GitRepo from "../../components/icon_svg/vuesax/git-repo.svg";
import JavaScript from "../../components/icon_svg/vuesax/code.svg";
import Slider from "../../components/icon_svg/vuesax/slider.svg";
import Theme from "../../../styles/Theme";

const skills = [
  {
    id: 1,
    icon: Pen,
    title: "UI & UX DESIGNING",
    description: "I design beautiful web interfaces with Figma and Adobe XD",
  },
  {
    id: 2,
    icon: Code,
    title: "WEB DEVELOPMENT",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
  },
  {
    id: 3,
    icon: Android,
    title: "WEB DEVELOPMENT",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
  },
  {
    id: 4,
    icon: GitRepo,
    title: "WEB DEVELOPMENT",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
  },
  {
    id: 5,
    icon: JavaScript,
    title: "WEB DEVELOPMENT",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
  },
  {
    id: 6,
    icon: Slider,
    title: "WEB DEVELOPMENT",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
  },
];

function SkillBox() {
  return (
    <GridConteiner>
      {skills.map((skill) => (
        <GridItems key={skill.id}>
          <img src={skill.icon} alt={skill.title} />
          <TitleStyle>{skill.title}</TitleStyle>
          <Text>{skill.description}</Text>
        </GridItems>
      ))}
    </GridConteiner>
  );
}

const GridConteiner = styled.div`
  div:nth-child(odd) {
    border: 3px solid ${Theme.color.accent};
  }

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, minmax(338px, 1fr));
  min-width: 100%;
  justify-content: center;
  min-height: 692px;
  gap: 17px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const GridItems = styled.div`
  :nth-child(even) {
    color: ${Theme.color.accent};
  }
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${Theme.color.primaryBg};
  border: 3px solid white;
  border-radius: 16px;
`;

const TitleStyle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 185%; /* 44.4px */
`;
const Text = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 32px; /* 188.235% */
  color: ${Theme.color.fonst};
`;

export default SkillBox;
