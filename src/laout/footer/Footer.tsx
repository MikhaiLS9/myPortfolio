import FlexWrapper from "../components/main/FlexWrapper"
import styled from "styled-components"
import Contact from "./contact/Contact"


function Footer (){
    return(
        <StyleContact>
            <div>
                <Titel>Connect with me:</Titel>
                <Text>Satisfied with me? Please contact me</Text>
            </div>
            <Contact></Contact>
        </StyleContact>
    )
}
const Titel = styled.h2``
const Text = styled.p`

`
const StyleContact = styled.div`
min-height: 70vh;
justify-content: space-evenly;
display: flex;
padding: 20px;
`
export default Footer