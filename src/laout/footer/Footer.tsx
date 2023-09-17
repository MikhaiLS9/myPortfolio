import styled from "styled-components";
import Contact from "./contact/Contact";
import SectionHeader from "../../styles/SectionHeader";
import Text from "../../styles/SectionText";
import Container from "../components/container/Container";
import Theme from "../../styles/Theme";
import FlexWrapper from "../components/main/FlexWrapper";

function Footer() {
  return (
    <StyleContact>
      <Container>
      <FlexWrapper justify="space-around">
        <StyleConnect>
          <SectionHeader>Connect with me:</SectionHeader>
          <Text>Satisfied with me? Please contact me</Text>
        </StyleConnect>
        <Contact></Contact>
      </FlexWrapper>
      </Container>
    </StyleContact>
  );
}

const StyleConnect = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleContact = styled.footer`
  h2 {
    color: ${Theme.color.accent};
  }
  min-height: 70vh;
  justify-content: space-evenly;
  display: flex;
  padding: 20px;
`;
export default Footer;
