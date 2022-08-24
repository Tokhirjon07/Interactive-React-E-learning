import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#!">
          e-learning
        </a>
      </h1>
      <ul>
        <li>
          <a href="#!">About us</a>
        </li>
        <li>
          <a href="#!">Courses</a>
        </li>
        <li>
          <a href="#!">Contact us</a>
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
