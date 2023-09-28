import Work from "./work/Work";
import stream from "../components/photo/xz.jpg";
import map from "../components/photo/map.jpg";
import car from "../components/photo/car.jpg";
import styled from "styled-components";
import Container from "../components/container/Container";
import SectionHeader from "../../styles/SectionHeader";
import Theme from "../../styles/Theme";
import Text from "../../styles/SectionText";

function Projects() {
  return (
    <StyleSection>
      <Container>
      <SectionHeader>Featured projects:</SectionHeader>
      <Text>
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </Text>
      </Container>
      <StyleProject>
        <Work  title="TWINDER" src={map} text="A live Geolocation app for finding tweets and twitter users around you."></Work>
        <Work src={stream} title={"LIVENTS"} text="A video streaming app with live Geolocation, for streaming events."></Work>
        <Work src={car} title={"MOOVE"} text="Mobile app for booking instant pickup & dropoff accross major cities."></Work>
      </StyleProject>
      
     
    </StyleSection>
  );
}
const StyleSection = styled.section`
h2{
  color: ${Theme.color.accent}
}
`
const StyleProject = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 17px;
margin: 17px auto;

@media (max-width: 360px){
  max-width: 300px;
  // justify-content: flex-start;
}
`
export default Projects;
