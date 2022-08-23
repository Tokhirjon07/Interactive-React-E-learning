import styled from "styled-components";

// Styled Components
export const About = styled.div`
  // CSS CODES
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 7rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 3rem;
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
