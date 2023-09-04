import FlexWrapper from "../components/main/FlexWrapper"
import styled from "styled-components"
import Contact from "./contact/Contact"


function Footer (){
    return(
        <FlexWrapper>
            <div>
                <Titel>Connect with me:</Titel>
                <Text>Satisfied with me? Please contact me</Text>
            </div>
            <Contact></Contact>
        </FlexWrapper>
    )
}
const Titel = styled.h2``
const Text = styled.p`

`
export default Footer