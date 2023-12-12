import styled from "styled-components";

export const OrderTableStyled = styled.div`
  margin-top: 3.6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 4em;

  & div {
    display: flex;
    gap: 1em;
  }
  & h4 {
    text-align: center;
    width: auto;
    font-size: 1.2rem;
    font-weight: 400;
    height: 100%;
    color: #135846;
    padding: 0.5em 2em;
    cursor: pointer;
  }

  & h4:hover {
    border-bottom: 2px solid #135846;
  }

`;
