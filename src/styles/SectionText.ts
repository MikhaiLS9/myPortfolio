import styled from "styled-components";
import Theme from "./Theme";

const Text= styled.p`
font-weight: 500;
font-size: 18px;

@media: ${Theme.media.tablet}{
    font-size: 15px;
}
`
export default Text