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
      <Logo>Jayjay Dinero</Logo>
      <Style>
        {items.map((item: { href: string; title: string }) => (
          <a href={`#${item.href}`}>{item.title}</a>
        ))}
      </Style>
    </StyleMenu>
  );
}
const StyleMenu = styled.nav`
  display: inline-flex;
  padding: 0px 160px;
  align-items: flex-start;
  gap: 394px;
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
const Style = styled.ul`
  display: flex;
  max-width: 450px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 25px;

  a {
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 726px) {
      font-size: 15px;
    }

    @media (max-width: 526px) {
      font-size: 12px;
    }
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

  // @amedia: ${Theme.media.tablet} {

  // }
`;
export default HeaderMenu;
