import styled from "styled-components";

export const OrderTableStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.5em;
  padding: 0.5em;
  margin-bottom: 2.1em;
  

  div {
    display: flex;
    gap: 2em;
  }
  h4 {
    font-size: 1rem;
    font-weight: 400;
    height: 100%;
    color: #135846;
  }
  h4:hover {
    border-bottom: 2px solid #135846;
  }

  button {
    border: 1px solid #135846;
    border-radius: 12px;
    width: 129px;
    height: 2.5em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    justify-content: center;
    color: #135846;
    background-color: transparent;
  }
`;
