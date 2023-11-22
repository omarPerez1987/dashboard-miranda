import styled from "styled-components";

export const OrderTableStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4em;
  padding: 0.8em;
  margin-bottom: 3.3em;  

  div {
    display: flex;
    gap: 3.2em;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    height: 100%;
    color: #135846;
  }
  h4:hover {
    border-bottom: 2px solid #135846;
  }

  button {
    font-size: 1.6rem;
    border: 1px solid #135846;
    border-radius: 1.2rem;
    width: 8em;
    height: 2.5em;
    display: flex;
    align-items: center;
    gap: 0.8em;
    justify-content: center;
    color: #135846;
    background-color: transparent;
  }
`;
