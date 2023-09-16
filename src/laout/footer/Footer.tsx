import styled from "styled-components";
import Contact from "./contact/Contact";
import SectionHeader from "../../styles/SectionHeader";
import Text from "../../styles/SectionText";
import Container from "../components/container/Container";
import Theme from "../../styles/Theme";

function Footer() {
  return (
    <StyleContact>
      <div>
        <SectionHeader>Connect with me:</SectionHeader>
        <Text>Satisfied with me? Please contact me</Text>
        </div>
        <Contact></Contact>
      
    </StyleContact>
  );
}

const StyleContact = styled.footer`
h2{
    color: ${Theme.color.accent}
}
  min-height: 70vh;
  justify-content: space-evenly;
  display: flex;
  padding: 20px;
`;
export default Footer;
