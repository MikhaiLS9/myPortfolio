import styled from "styled-components";

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
      <TextStyle>{props.text}</TextStyle>
      <Link href="#">View Live</Link>
      <Link href="#">Github Repo</Link>
    </StyledWork>
  );
}
const StyledWork = styled.div`
  max-width: 344px;
  width: 100%;
  border solid 3px
`;

const Image = styled.img`
  width: 100%;
  max-height: 154px;
`;

const Titel = styled.h3``;

const TextStyle = styled.p``;

const Link = styled.a``;

export default Works;
