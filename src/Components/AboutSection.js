import React from "react";
// import Images
import homeIntro from "../img/home-intro.jpg";
// import Styled Components
import styled from "styled-components";
import { About, Description, Image, Hide } from "../Styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              you <span>can change</span>
            </h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
        </div>
        <p>
          An educated mind can teach many. An educated is better than empty one.
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="man reading a book" />
      </Image>
    </About>
  );
};

export default AboutSection;
