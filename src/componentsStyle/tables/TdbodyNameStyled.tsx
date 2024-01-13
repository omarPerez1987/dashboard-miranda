import styled from "styled-components";

export const TdbodyNameStyled = styled.td`
  display: flex;
  gap: 0.8em;
  padding: 1em 1em 1em 0em;
  max-width: 200px;
  img {
    width: 45px;
    height: 45px;
    background-color: #c5c5c5;
  }
  .image-user {
    width: 88px;
    height: 88px;
  }
  .image-room {
    width: 150px;
    height: 77px;
    aspect-ratio: 16;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  span {
    color: #799283;
    font-size: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
