import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// React Images Imported
import react from "../img/ReactImg.png";
import javascript from "../img/JavascriptImg.jpg";
import soon from "../img/soonImg.jpeg";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interactive React And Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={react} alt="react and redux" />
        </Link>
      </Course>

      <Course>
        <h2>Soon... 😮</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={soon} alt="soon" />
        </Link>
      </Course>

      <Course>
        <h2>Interactive Javascript</h2>
        <div className="line"></div>
        <Link to="/courses/javascript">
          <img src={javascript} alt="javascript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 4rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default Courses;
