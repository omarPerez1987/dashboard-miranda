import styled from "styled-components";

export const CardUserStyled = styled.article`
  margin: 0 auto;
  padding: 1em 0em;
  width: 14.5em;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  & .card-img {
    width: 4.3em;
    height: 4.3em;
    background-color: #c5c5c5;
    margin-bottom: 1em;
    border-radius: 10px;
  }

  & .card-name {
    font-size: 1rem;
    color: #393939;
    margin-bottom: 0.5em;
  }

  & .card-email {
    font-size: 0.7rem;
    letter-spacing: 0px;
    color: #b2b2b2;
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    width: 80%;
    padding: 1em;
  }

  input {
    width: 80%;
    height: 1.5em;
    padding: 1em;
  }

  button {
    width: 70%;
    padding: 0.5em;
    background-color: #EBF1EF;
    color: #799283;
    font-size: 1rem;
    border-radius: 0.5em;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #e8ffee;
    color: #5ad07a;
  }

`;
