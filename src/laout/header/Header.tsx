import styled from "styled-components";
import Menu from "./menu/Menu";
import FlexWrapper from "../components/main/FlexWrapper";
import Theme from "../../styles/Theme";

function Header() {
  return (
    <StyleMenu>
      <Logo>Jayjay Dinero</Logo>
      <FlexWrapper justify="space-around" align="center" wrap="wrap">
        <Menu />
      </FlexWrapper>
    </StyleMenu>
  );
}
const StyleMenu = styled.header`
  color: ${Theme.color.primaryBg};
  display: flex;
  align-items: center;
  padding: 19px 160px;
  justify-content: space-around;
  align-items: center;
  gap: 394px;

  @media (max-width: 780px) {
    gap: 150px;
  }

  @media (max-width: 360px) {
    gap: 50px;
  }
`;

const Logo = styled.span`
  color: ${Theme.color.accent};
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 726px) {
    font-size: 25px;
  }

  @media (max-width: 526px) {
    font-size: 22px;
  }
`;
export default Header;
