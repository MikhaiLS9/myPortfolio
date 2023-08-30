import Work from "./work/Work";
import stream from "../components/photo/xz.jpg";
import map from "../components/photo/map.jpg";
import car from "../components/photo/car.jpg";
import FlexWrapper from "../components/main/FlexWrapper";
import styled from "styled-components";

function Projects() {
  return (
    <div>
      <TitleStyle>Featured projects:</TitleStyle>
      <TextStyle>
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </TextStyle>
      <FlexWrapper justify="center">
        <Work  title="TWINDER" src={map} text="A live Geolocation app for finding tweets and twitter users around you."></Work>
        <Work src={stream} title={"LIVENTS"} text="A video streaming app with live Geolocation, for streaming events."></Work>
        <Work src={car} title={"MOOVE"} text="Mobile app for booking instant pickup & dropoff accross major cities."></Work>
      </FlexWrapper>
    </div>
  );
}

const TitleStyle = styled.h2``;
const TextStyle = styled.p``;
export default Projects;
