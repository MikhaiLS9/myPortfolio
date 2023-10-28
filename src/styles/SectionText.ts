import styled from "styled-components";
// import Theme from "./Theme";

const Text = styled.p`
  max-width: 500px;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 726px) {
    font-size: 15px;
  }
`;
export default Text;
