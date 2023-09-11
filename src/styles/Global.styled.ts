import { createGlobalStyle } from "styled-components"
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
*,
*::befor,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    background-color: #1A1A29;
    color: ${Theme.color.fonst};
    font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }
  
`;
export default GlobalStyle;
