import styled from "styled-components";
import Theme from "./Theme";

const SectionHeader = styled.h2`
font-size: 32px;
font-weight: 600;

@media: ${Theme.media.tablet}{
    font-size: 22px;
}
`
export default SectionHeader