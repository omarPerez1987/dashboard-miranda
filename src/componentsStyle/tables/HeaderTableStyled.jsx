import styled from "styled-components";

export const HeaderTableStyled = styled.div`
  margin-top: 3.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 2.5em;
  

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
