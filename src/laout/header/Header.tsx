import styled from "styled-components"
function Header (){
    return(
        <nav>
            {/* <h1 className="name primary-colour">Jayjay Dinero</h1> */}
            <StyleMenu className="main">
            <h1 className="name primary-colour">Jayjay Dinero</h1>
            <h2 className="home primary-colour color-white">Home</h2>
            <h2 className="about color-white">About me</h2>
            <h2 className="projects color-white">Projects</h2>
            <h2 className="contact color-white">Contact</h2>
            </StyleMenu>
          
           
        </nav>
    )
}
const StyleMenu = styled.div`
display: inline-flex;
padding: 19px 160px;
align-items: flex-start;
gap: 300px;
background: #181824;
`
export default Header