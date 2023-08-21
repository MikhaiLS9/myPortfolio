import styled from "styled-components"
import photo from "../components/main/photo.png"
import FlexWrapper from "../components/main/FlexWrapper"
function Main(){
return (
    <Home>
         <FlexWrapper align={"center"} justify={"space-between"}>
        <h2 className="color-white">Hello, i’m</h2>
        <h1 className="color-white">Jayjay D. Dinero</h1>
        <AboutMe className="color-white">Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</AboutMe>
        
        <LeftBtn className="color-white">About me</LeftBtn>
        <button>Projects</button>
        <MyPhoto src={photo} alt="myphoto" />
        <Circle></Circle>
        <Line></Line>
        </FlexWrapper>
    </Home>
)
}
const Home = styled.div`
// display: flex
`

const AboutMe = styled.p`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const MyPhoto = styled.img`
width: 444px;
height: 444px;
flex-shrink: 0;
`
const LeftBtn = styled.button`
border-radius: 8px;
background: #7562E0;
display: inline-flex;
`

const Circle = styled.div`
  width: 486px;
  height: 486px;
  flex-shrink: 0;
  border-radius: 486px;
  background: #7562e0;
`;

const Line = styled.div`
background: #181824;
width:100vw;
height: 128px;
flex-shrink: 0;
`
export default Main