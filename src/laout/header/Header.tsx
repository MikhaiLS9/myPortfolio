import styled from "styled-components";
import Menu from "./menu/Menu";
function Header() {
  return (
    <StyleMenu className="main">
      <Logo>Jayjay Dinero</Logo>
      <Menu />
    </StyleMenu>
  );
}
const StyleMenu = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  min-height: 40px;
  gap: 394px;

`;

const Logo = styled.span`
display: flex;

// `
export default Header;
