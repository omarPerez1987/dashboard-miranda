import styled from "styled-components";

export const LoginStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;

  & .text-login {
    margin-bottom: 4em;
    text-align: center;
    & h4 {
      color: #135846;
      font-size: 1.8rem;
    }

    & .loader {
      font-size: 48px;
      color: #135846;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
      margin-bottom: 1.2em;
    }
    & .loader:before {
      content: "";
      animation: 5s print linear alternate infinite;
    }
    & .loader:after {
      content: "";
      position: absolute;
      right: -4px;
      top: 50%;
      transform: translatey(-45%);
      width: 2px;
      height: 1.3em;
      background: currentColor;
      opacity: 0.8;
      animation: 1s blink steps(2) infinite;
    }

    @keyframes blink {
      0% {
        visibility: hidden;
      }
      100% {
        visibility: visible;
      }
    }
    @keyframes print {
      0% {
        content: "H";
      }
      10% {
        content: "He";
      }
      20% {
        content: "Hel";
      }
      30% {
        content: "Hell";
      }
      40% {
        content: "Hello";
      }
      50% {
        content: "Hello ";
      }
      60% {
        content: "Hello A";
      }
      70% {
        content: "Hello Ad";
      }
      80% {
        content: "Hello Adm";
      }
      90% {
        content: "Hello Admi";
      }
      100% {
        content: "Hello Admin";
      }
    }
  }

  & img {
    width: 150px;
  }
`;
