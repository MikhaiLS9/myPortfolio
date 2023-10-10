import styled from "styled-components";
import FlexWrapper from "../../components/main/FlexWrapper";
import Theme from "../../../styles/Theme";


export default function Copyrigth() {
  return (
    <div>
      <FlexWrapper align="center" justify="center" direction="column">
        <Link href={'#main'}>Jayjay Dinero ⇑</Link>
      <Text>© 2023 Content copyright holder <b>Jayjay Dinero</b></Text>
      
      </FlexWrapper>
    </div>
  );
}

const Link = styled.a`
color: ${Theme.color.accent}
`
const Text = styled.small`

`
