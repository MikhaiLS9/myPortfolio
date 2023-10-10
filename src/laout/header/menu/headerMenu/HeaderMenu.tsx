import styled from "styled-components";
import Theme from "../../../../styles/Theme";

const items = [
  {
    title: "Home",
    href: "main",
  },
  {
    title: "About me",
    href: "about",
  },
  {
    title: "Project",
    href: "project",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

function HeaderMenu() {
  return (
    <StyleMenu>
      <Logo href="/about">Jayjay Dinero</Logo>
      <Style>
        {items.map((item: { href: string; title: string }) => (
          <NavLink href={`#${item.href}`} key={item.title}>{item.title}</NavLink>
        ))}
      </Style>
    </StyleMenu>
  );
}
const NavLink = styled.a`

`

const StyleMenu = styled.nav`
  display: inline-flex;
  // padding: 0px 160px;
  align-items: center;
  gap: 701px;
  height: 80px;
  white-space: nowrap;

  @media (max-width: 1200px) {
    gap: 100px;
    padding: 5px;
  }

  @media (max-width: 950px) {
    gap: 50px;
  }
`;

const Logo = styled.a`
  color: ${Theme.color.accent};
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 850px) {
    font-size: 25px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
const Style = styled.ul`
  display: flex;
  max-width: 450px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 25px;

  font-size: 18px;
  font-weight: 600;

  @media (max-width: 850px) {
    flex-wrap: wrap;
    font-size: 15px;
    gap: 20px;
    padding: 5px;
  }

  @media (max-width: 450px) {
    font-size: 12px;
    gap: 5px;
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
export default HeaderMenu;
