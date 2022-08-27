import React from "react";
import styled from "styled-components";
// React Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #383e47;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    li {
      list-style: none;
      padding: 0rem 1rem;
      letter-spacing: 0.1rem;
      position: relative;
    }
  }

  #logo {
    font-weight: lighter;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    font-family: "Silkscreen", cursive;
  }
`;

export default Nav;
