import styled from "styled-components";

export const TdbodyStyled = styled.td`
  color: #393939;
  font-size: 1.6rem;
  font-weight: medium;
  text-align: start;
  max-width: 200px;
  padding-right: 1em;

  p {
    font-size: 1.6rem;
    font-weight: medium;
  }

  span {
    font-size: 1.4rem;
    font-weight: normal;
  }

  button {
    padding: 0.5em 1em;
    height: auto;
    font-size: 1.6rem;
    border-radius: 12px;
    border: none;
    font-weight: 500;
  }

  h6 {
   color: #135846;
   font-size: 1.4rem;
   font-weight: normal;
  }
  
  .view-active {
    padding: 0.5em 2em;
    color: #212121;
    background-color: #eef9f2;
  }
  .view-desactive {
    padding: 0.5em 2em;
    color: #799283;
    border: 1px solid #799283;
    background-color: transparent;
  }

  .--red {
    color: #E23428;
    background-color: #FFEDEC;
  }
  .--green {
    color: #E8FFEE;
    background-color: #5AD07A;
  }
  .--grey {
    color: #6D6D6D;
    background-color: #E2E2E2;
  }
  .--black {
    color: #BEBEBE;
    background-color: #575757;
  }
  
  .active {
    
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
