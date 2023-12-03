import styled from "styled-components";

export const CardAdminStyled = styled.article`
  margin: 0 auto;
  padding: 1.6em 0em;
  width: 23.2em;
  height: auto;
  background-color: #ffffff;
  border-radius: 1.6em;
  display: flex;
  align-items: center;
  flex-direction: column;

  & .logo-login {
    width: 100px;
    margin-bottom: 4em;
  }

  &:hover {
    box-shadow: 0px 20px 30px #00000014;
    border: 1px solid #00000014;
  }

  & .card-img {
    width: 6.8em;
    height: 6.8em;
    background-color: #c5c5c5;
    margin-bottom: 1.6em;
    border-radius: 1.6rem;
  }

  & .card-name {
    font-size: 1.6rem;
    color: #393939;
    margin-bottom: 0.8em;
  }

  & .card-email {
    font-size: 1.1rem;
    letter-spacing: 0px;
    color: #b2b2b2;
    margin-bottom: 1.6em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6em;
    width: 80%;
    padding: 1.6em;
  }

  input {
    width: 80%;
    height: 2.4em;
    padding: 1.6em;
  }

  button {
    width: 70%;
    padding: 0.8em;
    background-color: #ebf1ef;
    color: #799283;
    font-size: 1.6rem;
    border-radius: 0.8em;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #e8ffee;
    color: #5ad07a;
  }
`;
