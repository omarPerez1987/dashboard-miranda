import styled from "styled-components";

export const ContactMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  width: 100%;
  height: 100%;

  & h1 {
    margin-top: 3em;
    font-size: 2rem;
    color: #135846;
  }

  & .container-reviews {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2em;
  }
`;
