import styled from "styled-components";
import Menu from "./menu/Menu";
import Container from "../components/container/Container";
import FlexWrapper from "../components/main/FlexWrapper";
import Theme from "../../styles/Theme";

function Header() {
  return (
    <StyleMenu>
      <Container>
        <FlexWrapper justify="space-between"  align="center">
          <Logo>Jayjay Dinero</Logo>
          <Menu />
        </FlexWrapper>
      </Container>
    </StyleMenu>
  );
}
const StyleMenu = styled.header`
  background-color: #fffafa;
  display: flex;
  justify-content: space-around;
  min-height: 40px;
  gap: 394px;
`;

const Logo = styled.span`
color : ${Theme.color.accent}
`;
export default Header;
