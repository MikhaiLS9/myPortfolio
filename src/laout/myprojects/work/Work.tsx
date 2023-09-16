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
      <LinkA href="#">View Live</LinkA>
      <LinkB href="#">Github Repo</LinkB>
      </StyleLink>
     
    </StyledWork>
  );
}
const StyledWork = styled.div`
  max-width: 344px;
  width: 100%;
  min-height: 415px;
  padding: 10px;
  background-color: #31313f;
`;

const Image = styled.img`
  width: 100%;
  max-height: 154px;
`;

const Titel = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${Theme.color.accent};
  margin: 5px;
`;
const StyleLink = styled.div`
display: flex;
`
const LinkA = styled.a`
  background: ${Theme.color.accent};
  color: ${Theme.color.fonst};
  border-radius: 8px;
  border: 2px solid ${Theme.color.accent};
  width: 145px;
  height: 43px;
  padding: 12px 25px;
  gap: 6px;
`;

const LinkB = styled.a`
  width: 144px;
  height: 43px;
  padding: 12px 34px;
  gap: 5px;
  border-radius: 8px;
  border: 2px solid ${Theme.color.accent};
  color: ${Theme.color.fonst};
`;

export default Works;
