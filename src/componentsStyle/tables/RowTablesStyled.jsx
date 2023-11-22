import styled from "styled-components";

export const RowTablesStyled = styled.tr`
  width: 100%;
  height: auto;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  
  td {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  img {
    background-color: #c5c5c5;
    border-radius: 8px;
    padding: 0.5em;
  }

  p {
    font-size: 0.8rem;
    color: #799283;
  }

  h4 {
    color: #393939;
    font-size: 0.9rem;
    font-weight: 600;
  }
  h5 {
    color: #393939;
    font-size: 0.9rem;
    font-weight: 500;
  }
  h6 {
    color: #393939;
    font-size: 0.8rem;
    font-weight: 400;
  }
  button {
    border: none;
    border-radius: 12px;
    font-size: 0.8rem;
    padding: 0.7em 1.2em;
  }
  & .view-desactive {
    border: 1px solid #799283;
    background-color: transparent;
    color: #799283;
    padding: 1em 2em;
    cursor: pointer;
}

& .view-active {
    background-color: #eef9f2;
    color: #212121;
    padding: 1em 2em;
    cursor: pointer;
  }
  & .red {
    background-color: #FFEDEC;
    color: #E23428;
  }
  & .green {
    background-color: #E8FFEE;
    color: #5AD07A;
  }
  & .grey {
    background-color: #E2E2E2;
    color: #6D6D6D;
  }
  & .black {
    background-color: #575757;
    color: #BEBEBE;
  }
`;
