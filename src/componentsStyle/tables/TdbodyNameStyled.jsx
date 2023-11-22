import styled from "styled-components";

export const TdbodyNameStyled = styled.td`
  display: flex;
  gap: 0.8em;
  padding: 1em;
  img {
    width: 45px;
    height: 45px;
    background-color: #c5c5c5;
  }
  .image-room {
    width: 88px;
    height: 88px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    color: #799283;
    font-size: 1.4rem;
    font-weight: normal;
  }
  p {
    font-size: 1.6rem;
    font-weight: medium;
  }
`;
