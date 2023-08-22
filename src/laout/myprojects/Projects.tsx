import xz from "../components/photo/xz.jpg";
import map from "../components/photo/map.jpg";
import car from "../components/photo/car.jpg";

import styled from "styled-components";
function Projects() {
  return (
    <div>
      <h1>Featured projects:</h1>
      <p>
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      <DivCar>
        <img src={map} alt="map" />
        <h1>TWINDER</h1>
        <p>
          A live Geolocation app for finding tweets and twitter users around
          you.
        </p>
      </DivCar>
      <DivCar>
        <img src={xz} alt="xz" />
        <h1>LIVENTS</h1>
        <p>
          A video streaming app with live Geolocation, for streaming events.
        </p>
      </DivCar>
      <DivCar>
        <img src={car} alt="car" />
        <h1>MOOVE</h1>
        <p>
          Mobile app for booking instant pickup & dropoff accross major cities.
        </p>
      </DivCar>
    </div>
  );
}
const DivCar = styled.div`
width: 33px
height: 17px
top: 486px
left: 38px
border-radius: 8px

`


export default Projects;
