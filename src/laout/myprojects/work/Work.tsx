import styled from "styled-components";
import Text from "../../../styles/SectionText";
import Theme from "../../../styles/Theme";

type StyledWorkTypeProps = {
  text: string;
  src: string;
  title: string;
};

function Works(props: StyledWorkTypeProps) {
  return (
    <StyledWork>
      <Image src={props.src} alt="img" />
      <Titel>{props.title} </Titel>
      <Text>{props.text}</Text>
      <StyleLink>
        <Link href="#">View Live</Link>
        <Link href="#">Github Repo</Link>
      </StyleLink>
    </StyledWork>
  );
}
const StyledWork = styled.div`
  display: flex;
  max-width: 344px;
  width: 100%;
  min-height: 417px;
  padding: 10px;
  background-color: #31313f;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 360px) {
    max-width: 300px;
    align-content: space-around;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 338px;
  max-height: 173px;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 36, 0.25) 0%,
    rgba(117, 98, 224, 0.5) 100%
  );
  background-blend-mode: multiply;
  opacity: 0.4;
  border: 2px solid ${Theme.color.accent};
`;

const Titel = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${Theme.color.accent};
  margin: 5px;
`;
const StyleLink = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;

  @media (max-width: 360px) {
    gap: 0px;
  }
`;
const Link = styled.a`
  display: flex;
  width: 144px;
  height: 43px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px;

  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 360px) {
    max-width: 130px;
    gap: 0px;
  }

  :first-child {
    background: ${Theme.color.accent};
    color: ${Theme.color.fonst};
    border-radius: 8px;

    font-size: 16px;
    font-weight: 600;

    display: flex;
    width: 145px;
    height: 43px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  border-radius: 8px;
  border: 2px solid ${Theme.color.accent};
  color: ${Theme.color.fonst};
`;

export default Works;
