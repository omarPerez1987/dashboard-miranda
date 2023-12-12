import styled from "styled-components";

export const TopMenuStyled = styled.section`
  width: 100%;
  height: 12em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px #00000005;

  div {
    display: flex;
    align-items: baseline;
    justify-content: start;
    gap: 3.2em;
    padding-left: 1.6em;
  }
  & .container-right {
    height: auto;
    justify-content: end;
    padding-right: 4.8em;
  }
  
  svg {
    width: 27px;
    height: 24px;
    color: #135846;
  }
  
  h1 {
    color: #135846;
    font-size: 2.7rem;
    font-weight: 600;
  }
  button {
    background-color: transparent;
    border: none;
  }
`;
