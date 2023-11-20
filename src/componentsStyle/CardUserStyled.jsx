import styled from "styled-components";

export const CardUserStyled = styled.article`
  padding: 1em 0em;
  margin: 1em;
  width: 25em;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 30%;
    height: auto;
    background-color: #C5C5C5;
    margin: 2em;
    border-radius: 10px;
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
    height: 2.5em;
    padding: 1em;
  }

  button {
    width: 30%;
    padding: 0.5em;
    background-color: #E2E2E2;
    color: #6D6D6D;
    font-size: 1rem;
    border-radius: 0.7em;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #E8FFEE;
    color: #5AD07A;
  }
`;
