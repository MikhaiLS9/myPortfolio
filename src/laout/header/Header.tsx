import styled from "styled-components";
// import Menu from "./menu/Menu";
import FlexWrapper from "../components/main/FlexWrapper";
import Theme from "../../styles/Theme";
import HeaderMenu from "./menu/headerMenu/HeaderMenu";
import Container from "../components/container/Container";

function Header() {
  return (
    <StyleMenu>
      <Container>
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <HeaderMenu />
        </FlexWrapper>
      </Container>
    </StyleMenu>
  );
}
const StyleMenu = styled.header`
  position: sticky;
  top: 0;
  background-color: ${Theme.color.primaryBg};
  color: ${Theme.color.fonst};
  // padding: 19px 160px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 999;

  color: ${Theme.color.primaryBg};
  display: flex;
  align-items: center;
  // padding: 19px 160px;
  justify-content: space-around;
  align-items: center;
  // gap: 394px;

`;

export default Header;
