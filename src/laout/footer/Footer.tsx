import styled from "styled-components";
import Contact from "./contact/Contact";
import SectionHeader from "../../styles/SectionHeader";
import Text from "../../styles/SectionText";
import Container from "../components/container/Container";
import Theme from "../../styles/Theme";
import FlexWrapper from "../components/main/FlexWrapper";
import Sms from "../components/icon_svg/vuesax/vuesax/sms.svg";
import Facebook from "../components/icon_svg/vuesax/vuesax/facebook.svg";
import Instagram from "../components/icon_svg/vuesax/vuesax/instagram.svg";
import Dribbble from "../components/icon_svg/vuesax/vuesax/dribbble.svg";

function Footer() {
  return (
    <StyleContact id="contact">
      <Container>
        <FlexWrapper justify="space-around" align="flex-start">
          <StyleConnect>
            <SectionHeader>Connect with me:</SectionHeader>
            <Text>Satisfied with me? Please contact me</Text>
            <StyledImage>
              <a href="https://facebook.com">
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a href="https://instagram.com">
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a href="https://facebook.com">
                <Image src={Dribbble} alt="Dribbble" />
              </a>
              <a href="https://facebook.com">
                <Image src={Sms} alt="Sms" />
              </a>
            </StyledImage>
          </StyleConnect>
          <Contact />
        </FlexWrapper>
      </Container>
    </StyleContact>
  );
}

const StyleConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyleContact = styled.footer`
  h2 {
    color: ${Theme.color.accent};
  }
  min-height: 70vh;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  padding: 20px;
`;
const StyledImage = styled.span`
  display: flex;
  gap: 17px;
`;
const Image = styled.img``;

export default Footer;
