import styled from "styled-components";

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
const StyleMenu = styled.nav`
  display: flex;
  gap: 30px;
`;
const Style = styled.ul`
display: flex;
gap: 30px;

`
export default Menu;
