import styled from "styled-components";
import Menu from "./menu/Menu";
import Container from "../components/container/Container";
import FlexWrapper from "../components/main/FlexWrapper";
import Theme from "../../styles/Theme";

function Header() {
  return (
    // <Container>
    <StyleMenu>
      <Container>
      
        <FlexWrapper justify="space-around"  align="center" wrap="wrap">
        <Logo>Jayjay Dinero</Logo>
          <Menu />
        </FlexWrapper>
      </Container>
    </StyleMenu>
    // </Container>
  );
}
const StyleMenu = styled.header`
color : ${Theme.color.primaryBg};
display: flex;
padding: 19px 160px;
align-items: flex-start;
gap: 394px;
`;

const Logo = styled.span`
color : ${Theme.color.accent};
font-size: 28px;
font-weight: 600;

@media (max-width: 726px){
  font-size: 25px;
}

@media (max-width: 526px){
  font-size: 22px;
}
`;
export default Header;
