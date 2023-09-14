import styled from "styled-components";
import Theme from "../../../styles/Theme";

function Menu() {
  return (
    <StyleMenu>
      <Style>
        <li>
          <a href="/home ">Home</a>
        </li>
        <li>
          <a href="/about">About me</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </Style>
    </StyleMenu>
  );
}
const StyleMenu = styled.nav``;
const Style = styled.ul`
  display: flex;
  min-width: 450px;
  justify-content: space-between;
  align-items: center;

  
  a {
    font-size: 18px;
    font-weight: 600;
  }
  a:link {
    color: ${Theme.color.fonst};
   }
 
  a:visited {
    color: ${Theme.color.accent};
  }
  a:active {
    color: ${Theme.color.accent};
  }
`;
export default Menu;
